const CabModel = require("../models/cabModel");

const CabController = {
  health(req, res) {
    return res.json(CabModel.health());
  },

  login(req, res) {
    const payload = req.body || {};
    const result = CabModel.login(payload.username, payload.password);
    return res.status(result.success === false ? 401 : 200).json(result);
  },

  createCustomer(req, res) {
    const result = CabModel.createCustomer(req.body || {});
    return res.status(201).json(result);
  },

  listCustomers(req, res) {
    return res.json(CabModel.listCustomers());
  },

  getCustomer(req, res) {
    const customer = CabModel.getCustomer(req.params.customerId);
    if (!customer)
      return res
        .status(404)
        .json({
          success: false,
          code: "NOT_FOUND",
          message: "Customer not found",
        });
    return res.json({ success: true, data: customer });
  },

  createDriver(req, res) {
    const result = CabModel.createDriver(req.body || {});
    return res.status(201).json(result);
  },

  listDrivers(req, res) {
    return res.json(CabModel.listDrivers());
  },

  getDriver(req, res) {
    const driver = CabModel.getDriver(req.params.driverId);
    if (!driver)
      return res
        .status(404)
        .json({
          success: false,
          code: "NOT_FOUND",
          message: "Driver not found",
        });
    return res.json({ success: true, data: driver });
  },

  updateDriverLocation(req, res) {
    const result = CabModel.updateDriverLocation(
      req.params.driverId,
      req.body || {},
    );
    if (!result)
      return res
        .status(404)
        .json({
          success: false,
          code: "NOT_FOUND",
          message: "Driver not found",
        });
    return res.json(result);
  },

  createTrip(req, res) {
    const result = CabModel.createTrip(req.body || {});
    return res.status(201).json(result);
  },

  listTrips(req, res) {
    return res.json(CabModel.listTrips());
  },

  getTrip(req, res) {
    const trip = CabModel.getTrip(req.params.tripId);
    if (!trip)
      return res
        .status(404)
        .json({ success: false, code: "NOT_FOUND", message: "Trip not found" });
    return res.json({ success: true, data: trip });
  },

  updateTrip(req, res) {
    const result = CabModel.updateTrip(req.params.tripId, req.body || {});
    if (!result)
      return res
        .status(404)
        .json({ success: false, code: "NOT_FOUND", message: "Trip not found" });
    return res.json(result);
  },

  assignTrip(req, res) {
    const result = CabModel.assignTrip(req.params.tripId, req.body || {});
    return res.status(result.success === false ? 404 : 200).json(result);
  },

  estimateTrip(req, res) {
    return res.json(CabModel.estimateTrip(req.params.tripId));
  },

  cancelTrip(req, res) {
    const result = CabModel.cancelTrip(req.params.tripId, req.body || {});
    return res.status(result.success === false ? 404 : 200).json(result);
  },

  quote(req, res) {
    return res.json(CabModel.quote(req.body || {}));
  },

  createPayment(req, res) {
    const result = CabModel.createPayment(req.body || {});
    return res.status(201).json(result);
  },

  listPayments(req, res) {
    return res.json(CabModel.listPayments());
  },

  getPayment(req, res) {
    const payment = CabModel.getPayment(req.params.paymentId);
    if (!payment)
      return res
        .status(404)
        .json({
          success: false,
          code: "NOT_FOUND",
          message: "Payment not found",
        });
    return res.json({ success: true, data: payment });
  },

  refundPayment(req, res) {
    const result = CabModel.refundPayment(req.params.paymentId, req.body || {});
    return res.status(result.success === false ? 404 : 200).json(result);
  },

  sendNotification(req, res) {
    const result = CabModel.sendNotification(req.body || {});
    return res.status(201).json(result);
  },

  listNotifications(req, res) {
    return res.json(CabModel.listNotifications());
  },

  getAssignments(req, res) {
    return res.json(CabModel.getAssignments());
  },

  getSchedule(req, res) {
    return res.json(CabModel.getSchedule());
  },

  getRevenueReport(req, res) {
    const fromDate = req.query.fromDate || "2026-01-01";
    const toDate = req.query.toDate || "2026-12-31";
    return res.json(CabModel.getRevenueReport(fromDate, toDate));
  },

  getTripReport(req, res) {
    return res.json(
      CabModel.getTripReport(req.query.driverId, req.query.status),
    );
  },
};

module.exports = CabController;
