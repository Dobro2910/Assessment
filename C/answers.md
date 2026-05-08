1. 
    - Ping the /connections endpoint and if it returns data, it means the connection is working.
2. 
    - Check if the Enpoint URL is correct or not
    - Check Xero ID if Xero requires one
    - Check Xero Token scope
    - Check if Xero Token has expired
3.
    - GET https://api.xero.com/api.xro/2.0/Invoices
4. 
    - GET https://api.xero.com/api.xro/2.0/Invoices/{InvoiceID}
    - Example: GET https://api.xero.com/api.xro/2.0/Invoices/243216c5-369e-4056-ac67-05388f86dc81
5.
    - 429 response is a "Rate Limit Exceeded" error
    Solution:
    - Retry with delay so that it doesnt exceed the rate limit
    - Queue the request so that it doesnt send multiple requests at once
