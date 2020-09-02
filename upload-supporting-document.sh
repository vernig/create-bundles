ATTRIBUTES=$(cat << EOF
{
    "address_sids": ["ADXXXXX","ADXXXXX"],
    "document_number": "312454", 
    "business_name": "Twilio",
    "issue_date": "2019-11-15"
}
EOF
)

curl -X POST https://numbers-upload.twilio.com/v2/RegulatoryCompliance/SupportingDocuments \
-F "Attributes=$ATTRIBUTES" \
-F "FriendlyName=Twilio GmbH" \
-F "Type=government_issued_document" \
-F "File=@document.pdf" \
-u ACCOUNT_SID:AUTH_TOKEN