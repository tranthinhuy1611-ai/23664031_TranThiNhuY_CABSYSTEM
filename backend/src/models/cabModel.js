const customers = [
  {
    id: "C001",
    fullName: "Khách hàng Demo",
    phone: "0900000001",
    email: "demo.customer@example.com",
    address: "Ho Chi Minh City",
  },
];

const drivers = [
  {
    id: "D001",
    fullName: "Tài xế Demo",
    phone: "0900000002",
    vehicleType: "Taxi",
    vehiclePlate: "59A-12345",
    licenseNumber: "L12345",
    latitude: 10.79,
    longitude: 106.7,
    address: "Quận 1, HCM",
    status: "available",
  },
];

let trips = [
  {
    id: "T001",
    customerId: "C001",
    driverId: null,
    pickup: {
      latitude: 10.78,
      longitude: 106.69,
      address: "Quận 1, HCM",
    },
    destination: {
      latitude: 10.81,
      longitude: 106.63,
      address: "Bến Thành, HCM",
    },
    serviceType: "standard",
    requestedAt: "2026-09-09T10:00:00Z",
    status: "assigned",
    fare: 120000,
  },
];

let payments = [
  {
    id: "P001",
    tripId: "T001",
    method: "card",
    amount: 120000,
    status: "pending",
  },
];

const notifications = [];

function health() {
  return { status: "ok", service: "CAB System Demo MVC" };
}

function login(username, password) {
  if (username === "admin" && password === "123456") {
    return {
      accessToken: "demo-token-abc",
      refreshToken: "demo-refresh-token-abc",
      tokenType: "bearer",
      expiresIn: 3600,
      user: {
        id: "U001",
        fullName: username,
        email: "admin@example.com",
        phone: "0900000000",
        role: "customer",
      },
    };
  }

  return {
    success: false,
    code: "INVALID_CREDENTIALS",
    message: "Sai username hoặc password",
  };
}

function createCustomer(payload) {
  const id = `C${String(customers.length + 1).padStart(3, "0")}`;
  const customer = { id, ...payload };
  customers.push(customer);
  return { success: true, data: customer };
}

function listCustomers() {
  return { success: true, data: customers };
}

function getCustomer(customerId) {
  return customers.find((x) => x.id === customerId) || null;
}

function createDriver(payload) {
  const id = `D${String(drivers.length + 1).padStart(3, "0")}`;
  const driver = { id, ...payload, status: "available" };
  drivers.push(driver);
  return { success: true, data: driver };
}

function listDrivers() {
  return { success: true, data: drivers };
}

function getDriver(driverId) {
  return drivers.find((x) => x.id === driverId) || null;
}

function updateDriverLocation(driverId, payload) {
  const driver = getDriver(driverId);
  if (!driver) return null;
  driver.latitude = payload.latitude;
  driver.longitude = payload.longitude;
  driver.address = payload.address || driver.address;
  return { success: true, data: driver };
}

function createTrip(payload) {
  const id = `T${String(trips.length + 1).padStart(3, "0")}`;
  const trip = { id, status: "requested", fare: 120000, ...payload };
  trips.push(trip);
  return { success: true, data: trip };
}

function listTrips() {
  return { success: true, data: trips };
}

function getTrip(tripId) {
  return trips.find((t) => t.id === tripId) || null;
}

function updateTrip(tripId, payload) {
  const trip = getTrip(tripId);
  if (!trip) return null;
  Object.assign(trip, payload);
  return { success: true, data: trip };
}

function assignTrip(tripId, payload) {
  const trip = getTrip(tripId);
  const driver = getDriver(payload.driverId);
  if (!trip || !driver)
    return {
      success: false,
      code: "NOT_FOUND",
      message: "Trip or driver not found",
    };
  trip.driverId = payload.driverId;
  trip.status = "assigned";
  driver.status = "busy";
  return { success: true, data: trip };
}

function estimateTrip(tripId) {
  const trip = getTrip(tripId);
  if (!trip)
    return { success: false, code: "NOT_FOUND", message: "Trip not found" };
  return {
    success: true,
    data: { tripId, fare: trip.fare || 120000, currency: "VND" },
  };
}

function cancelTrip(tripId, payload) {
  const trip = getTrip(tripId);
  if (!trip)
    return { success: false, code: "NOT_FOUND", message: "Trip not found" };
  trip.status = "cancelled";
  trip.reason = payload.reason || "cancelled";
  return { success: true, data: trip };
}

function quote(payload) {
  const distance =
    Math.abs(payload.destination.latitude - payload.pickup.latitude) +
    Math.abs(payload.destination.longitude - payload.pickup.longitude);
  const fare =
    payload.serviceType === "vip"
      ? 250000
      : 120000 + Math.round(distance * 10000);
  return {
    success: true,
    data: { fare, currency: "VND", distanceKm: Number(distance.toFixed(2)) },
  };
}

function createPayment(payload) {
  const id = `P${String(payments.length + 1).padStart(3, "0")}`;
  const payment = { id, status: "pending", ...payload };
  payments.push(payment);
  return { success: true, data: payment };
}

function listPayments() {
  return { success: true, data: payments };
}

function getPayment(paymentId) {
  return payments.find((p) => p.id === paymentId) || null;
}

function refundPayment(paymentId, payload) {
  const payment = getPayment(paymentId);
  if (!payment)
    return { success: false, code: "NOT_FOUND", message: "Payment not found" };
  payment.status = "refunded";
  payment.refund = {
    reason: payload.reason || "refund",
    amount: payload.amount || payment.amount,
  };
  return { success: true, data: payment };
}

function sendNotification(payload) {
  const item = {
    id: `N${String(notifications.length + 1).padStart(3, "0")}`,
    recipientId: payload.recipientId,
    type: payload.type,
    message: payload.message,
    createdAt: new Date().toISOString(),
  };
  notifications.push(item);
  return { success: true, data: item };
}

function listNotifications() {
  return { success: true, data: notifications };
}

function getAssignments() {
  return {
    success: true,
    data: trips.map((t) => ({
      tripId: t.id,
      driverId: t.driverId || "unassigned",
      status: t.status,
    })),
  };
}

function getSchedule() {
  return {
    success: true,
    data: {
      schedule: [{ date: "2026-09-09", driverId: "D001", tripId: "T001" }],
    },
  };
}

function getRevenueReport(fromDate, toDate) {
  const total = payments.reduce((sum, p) => sum + (p.amount || 0), 0);
  return {
    success: true,
    data: { fromDate, toDate, totalRevenue: total, currency: "VND" },
  };
}

function getTripReport(driverId, status) {
  const list = trips.filter(
    (t) =>
      (!driverId || t.driverId === driverId) &&
      (!status || t.status === status),
  );
  return { success: true, data: { count: list.length, items: list } };
}

module.exports = {
  health,
  login,
  createCustomer,
  listCustomers,
  getCustomer,
  createDriver,
  listDrivers,
  getDriver,
  updateDriverLocation,
  createTrip,
  listTrips,
  getTrip,
  updateTrip,
  assignTrip,
  estimateTrip,
  cancelTrip,
  quote,
  createPayment,
  listPayments,
  getPayment,
  refundPayment,
  sendNotification,
  listNotifications,
  getAssignments,
  getSchedule,
  getRevenueReport,
  getTripReport,
};
