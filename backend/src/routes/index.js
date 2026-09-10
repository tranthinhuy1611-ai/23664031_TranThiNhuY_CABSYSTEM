const CabController = require("../controllers/cabController");

function routeHandler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method.toUpperCase();

  const routes = [
    { method: "GET", path: "/api/health", handler: CabController.health },
    { method: "POST", path: "/api/auth/login", handler: CabController.login },

    {
      method: "POST",
      path: "/api/customers",
      handler: CabController.createCustomer,
    },
    {
      method: "GET",
      path: "/api/customers",
      handler: CabController.listCustomers,
    },
    {
      method: "GET",
      path: "/api/customers/:customerId",
      handler: CabController.getCustomer,
    },

    {
      method: "POST",
      path: "/api/drivers",
      handler: CabController.createDriver,
    },
    { method: "GET", path: "/api/drivers", handler: CabController.listDrivers },
    {
      method: "GET",
      path: "/api/drivers/:driverId",
      handler: CabController.getDriver,
    },
    {
      method: "PUT",
      path: "/api/drivers/:driverId/location",
      handler: CabController.updateDriverLocation,
    },

    { method: "POST", path: "/api/trips", handler: CabController.createTrip },
    { method: "GET", path: "/api/trips", handler: CabController.listTrips },
    {
      method: "GET",
      path: "/api/trips/:tripId",
      handler: CabController.getTrip,
    },
    {
      method: "PATCH",
      path: "/api/trips/:tripId",
      handler: CabController.updateTrip,
    },
    {
      method: "POST",
      path: "/api/trips/:tripId/assign",
      handler: CabController.assignTrip,
    },
    {
      method: "GET",
      path: "/api/trips/:tripId/estimate",
      handler: CabController.estimateTrip,
    },
    {
      method: "POST",
      path: "/api/trips/:tripId/cancel",
      handler: CabController.cancelTrip,
    },

    {
      method: "POST",
      path: "/api/payments/quote",
      handler: CabController.quote,
    },
    {
      method: "POST",
      path: "/api/payments",
      handler: CabController.createPayment,
    },
    {
      method: "GET",
      path: "/api/payments",
      handler: CabController.listPayments,
    },
    {
      method: "GET",
      path: "/api/payments/:paymentId",
      handler: CabController.getPayment,
    },
    {
      method: "POST",
      path: "/api/payments/:paymentId/refund",
      handler: CabController.refundPayment,
    },

    {
      method: "POST",
      path: "/api/notifications",
      handler: CabController.sendNotification,
    },
    {
      method: "GET",
      path: "/api/notifications",
      handler: CabController.listNotifications,
    },

    {
      method: "GET",
      path: "/api/operations/assignments",
      handler: CabController.getAssignments,
    },
    {
      method: "GET",
      path: "/api/operations/schedule",
      handler: CabController.getSchedule,
    },

    {
      method: "GET",
      path: "/api/reports/revenue",
      handler: CabController.getRevenueReport,
    },
    {
      method: "GET",
      path: "/api/reports/trips",
      handler: CabController.getTripReport,
    },
  ];

  const pathName = url.pathname;
  const matched = routes.find(
    (r) => r.method === method && matchRoutePath(r.path, pathName),
  );

  if (!matched) {
    return sendJson(res, 404, {
      success: false,
      code: "NOT_FOUND",
      message: "Endpoint not found",
    });
  }

  req.params = extractParams(matched.path, pathName);
  req.query = Object.fromEntries(url.searchParams.entries());

  return matched.handler(req, res);
}

function matchRoutePath(pattern, pathname) {
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);
  if (patternParts.length !== pathParts.length) return false;

  return patternParts.every(
    (part, i) => part.startsWith(":") || part === pathParts[i],
  );
}

function extractParams(pattern, pathname) {
  const params = {};
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);

  patternParts.forEach((part, i) => {
    if (part.startsWith(":")) {
      params[part.slice(1)] = pathParts[i];
    }
  });

  return params;
}

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body, null, 2));
}

module.exports = routeHandler;
