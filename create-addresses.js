require('dotenv').config();
const twilioClient = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWLIO_AUTH_TOKEN
);

async function createAddresses() {
  // Load the addresses
  addresses = loadAddresses();
  /**
   * Addresses is an array of objects with the following keys:
   * friendlyName
   * customerName
   * street
   * city
   * region
   * postalCode
   * isoCountry
   *
   * To each address we will be adding asid (Address SID)
   */

  for (var index = 0; index < addresses.length; index++) {
    address = await twilioClient.addresses.create(addresses[index]);
    // Store the Address SID for reference
    // This will be used in the last step of the procedure
    // when the number will be associated to the address
    addresses[index].asid = address.sid;
  }

  // Store the addresses with address sid
  storeAddresses(addresses);
}
