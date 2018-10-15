# Tune or Reduce Firewall Logs

The **most common** question we get is:

> "The firewall/Panorama produces a lot of logs and it's overwhelming our Splunk license. How can I reduce the log volume without losing security visibility?"

The firewall offers very granular logging controls, so you can tune and reduce logs to Splunk with extreme precision. Even so, this question is difficult to answer because the answer is different for every organization. So this page is an effort to provide general guidance to help you answer this question for yourself.

This page will evolve over time as we get feedback from customers. If it's not a fit for your organization, please let us know at splunkapp@paloaltonetworks.com with specific guidance on how this page can improve to recognize your situation.

## Log Types

There are many log types, and not all of them are relevant to every organization. The following table shows the characteristics of the logs types as of PAN-OS 8.1:

| Log Type | Splunk Sourcetype | Log Size | Log Frequency |
| :--- | :--- | :--- | :--- |
| Traffic | pan:traffic | Large | Very High |
| Threat | pan:threat | Large | Low |
| Threat : url | pan:threat | Large | Very High |
| Threat : file | pan:threat | Large | High |
| System | pan:system | Medium | Medium |
| Configuration | pan:config | Small | Low |
| Correlation | pan:correlation | Small | Low |
| HIP Match | pan:hipmatch | Small | Medium |
| User-ID | Not supported |  |  |
| Authentication | Not supported |  |  |
| Tunnel | Not supported |  |  |
| GTP | Not supported |  |  |
| SCTP | Not supported |  |  |

Note: URL and File logs are of type Threat, but they are called out separately because they have a different frequency than most threat logs.

You can see from the table that **Traffic logs and URL logs** are the most frequent and largest, with **File logs** coming in second. These log types will make up the bulk of what Splunk has to ingest and index.

## Eliminate Log Types

You can eliminate specific log types that are not of use for your organization. Here are a couple examples:

1. If you use Splunk in a SOC for security, but are not responsible for the operational health of the firewalls, you could consider disabling System and Config log types
2. Traffic logs are large and frequent. Cut their volume in half by shutting off 'Start' logs in all your firewall rules. 'Start' logs often have an incorrect app anyway, becuase they are logged before the app is fully determined. The 'End' logs will have the correct App and other data such as the session duration. See [Session Log Best Practices](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000Clt5CAC).

## Elinitate Logs for Specific Endpoints or Threats

You can only get so far disabling entire log types. Most organizations need these log types and can't disable all URL or Traffic logs. You can make an impact by reducing these log types only when they are redundant or unnecessary. You can turn these logs on or off on specific rules which gives you complete control over every log. Here are examples of where you might consider reducing log volume:

1. Backup software runs every night generating thousands of connections from endpoints to a backup server. Create a rule for this backup app from internal endponts to the backup server which logs only threats, and doesn't log traffic sessions, urls, or files.
2. Use of an internal app regularly triggers a vulnerability or spyware alert, however, its determined that this is the normal operation of the app and no risk exists. Create a rule for this specific app and the server it runs on that disables this signature.



