require('dotenv').config();
const twilioClient = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWLIO_AUTH_TOKEN
);

bundleSid = '' //<-- This is the Bundle SID 
documentSid = '' // <-- This is the SID of the document created with upload-supporting-document.sh

async function attachDocumentToBundle() {
  return await twilioClient.numbers.regulatoryCompliance
    .bundles(bundleSid)
    .itemAssignments.create({
      objectSid: documentSid
    });
}