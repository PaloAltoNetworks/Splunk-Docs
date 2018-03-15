<img src="assets/logos.png" class="no-shadow" />

About the App
-------------

<a href="https://www.paloaltonetworks.com/resources/videos/splunk"><img src="/assets/video1.png" /></a>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VFgl5hvjUyg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Palo Alto Networks and Splunk have partnered to deliver an advanced security reporting and analysis tool. The collaboration delivers operational reporting as well as simplified and configurable dashboard views across Palo Alto Networks family of next-generation firewalls.

Splunk for Palo Alto Networks leverages the data visibility provided by Palo Alto Networks's firewalls and endpoint protection with Splunk's extensive investigation and visualization capabilities to deliver an advanced security reporting and analysis tool. This app enables security analysts, administrators, and architects to correlate application and user activities across all network and security infrastructures from a real-time and historical perspective.

Complicated incident analysis that previously consumed days of manual and error-prone data mining can now be completed in a fraction of the time, saving not only manpower but also enabling key enterprise security resources to focus on critical, time-sensitive investigations.

**App Authors**:

Brian Torres-Gil -- [email](mailto:btorres-gil@paloaltonetworks.com) - [splunkbase](https://answers.splunk.com/users/183886/btorresgil.html) - [github](https://github.com/btorresgil)

Paul Nguyen -- [email](mailto:panguy@paloaltonetworks.com) - [splunkbase](https://answers.splunk.com/users/408229/panguy.html) - [github](https://github.com/paulmnguyen)

Garfield Freeman -- [email](mailto:gfreeman@paloaltonetworks.com) - [splunkbase](https://answers.splunk.com/users/137977/gfreeman.html) - [github](https://github.com/shinmog)

Features
--------

The **Palo Alto Networks App** and **Add-on** have different features that are designed to work together, and with Splunk Enterprise Security when available.

**Palo Alto Networks App**

-   Dashboards to track adversary attacks, incidents, SaaS application usage, user activity, system health, configuration changes for audits, malware, GlobalProtect VPN, and other Palo Alto Networks specific features.
-   Advanced correlations in each dashboard
-   Datamodels with pivots for easy access to data and visualizations
-   Leverage [AutoFocus](/autofocus-and-minemeld.md) to prioritize attacks and investigations and search for IOC's
-   Splunk [Adaptive Response](/adaptive-response.md) integration for automated action and remediation
-   Index the [behavioral footprint](/wildfire.md) of malware seen by WildFire
-   [Sync user login events with User-ID](/userid.md)
-   [Use Adaptive Response to share context with Dynamic Address Groups](/adaptive-response.md)
-   [Update metadata from content packs](/lookups.md#contentpack)
-   [Special searchbar commands](/commands.md)
-   Macros for easy access to logs

**Palo Alto Networks Add-on**

-   Fully [Common Information Model](/enterprise-security.md) (CIM) compliant and designed for use with [Splunk Enterprise Security](/enterprise-security.md)
-   Field extraction for Palo Alto Networks logs from [Firewalls, Panorama, Traps Endpoint Security](/firewalls-panorama-and-traps.md), and [Aperture SaaS Application Security](https://www.paloaltonetworks.com/products/secure-the-cloud/aperture)
-   Leverage threat intelligence from [MineMeld and AutoFocus](/autofocus-and-minemeld.md)
-   [IP Classification](/lookups.md) tailored to your network environment
-   [Designate SaaS applications](/lookups.md#saas) as sanctioned or unsanctioned for your organization
-   App and Threat metadata from the Palo Alto Networks content and signature packs

Requirements
------------

The Palo Alto Networks App and Add-on for Splunk has varying system requirements depending on the number of logs sent to Splunk. The firewall administrator has granular control over the quantity of logs sent. The more logs sent to Splunk, the more visibility is available into the traffic on the network.

If the compute resources of the servers are oversubscribed, the firewall administrator can reduce the volume of logs sent from the firewall by turning off unnecessary logs. Common high-volume low-value candidates are traffic start logs, non-container URL logs, benign WildFire logs, and logs from policy rules that pass a lot of traffic that is not highly relevant (eg. local SAN traffic).

**App:**
The Palo Alto Networks App for Splunk contains a datamodel and dashboards. The dashboards use the datamodel to pull logs quickly for visualization. The dashboards don't require a lot of compute resources or memory, and neither does the datamodel once it is built. However, the process of building the datamodel is very CPU intensive, and is an ongoing process as new logs are indexed and need to be added to the datamodel summary index. By building the datamodel and spending the compute resources to summarize the data when logs are indexed, it allows the dashboards and visualizations to pull the data quickly without intensive compute.

Care should be taken to ensure the datamodel summary indexing has enough compute resources available to keep up with the flow of logs to the index. If there aren't enough compute resources available, the dashboards may lag behind the data in the index.

**Add-on:**
The Palo Alto Networks Add-on for Splunk handles the parsing of the logs into the index. It is highly optimized, but can require significant compute resources for high volumes of logs.



