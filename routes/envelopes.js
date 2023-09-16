const express = require("express");
const router = express.Router();

const {
  getEnvelopes,
  addEnvelope,
  getEnvelopeById,
  deleteEnvelope,
  updateEnvelope,
  transfer,
} = require("../controllers/envelopes");

router.get("/", getEnvelopes);

router.get("/:id", getEnvelopeById);

router.post("/", addEnvelope);

router.put("/:id", updateEnvelope);

router.delete("/:id", deleteEnvelope);

router.post("/:fromId/transfer/:toId", transfer);

module.exports = router;
