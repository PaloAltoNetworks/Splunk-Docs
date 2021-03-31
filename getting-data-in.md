# Getting Data Into Splunk

Splunk can collect data from all Palo Alto Networks products, each providing a wealth of visibility and control.

<img src="/assets/architecture.png" alt="Architecture Diagram" class="no-shadow">

#### Firewall and Panorama

Secure the network domain. Syslog network and system health events to Splunk.

- [More information about Next-generation Firewall](https://www.paloaltonetworks.com/products/secure-the-network/next-generation-firewall)
- [More information about Panorama](https://www.paloaltonetworks.com/products/management/panorama)
- [Bring Firewall and Panorama data into Splunk](/firewalls-panorama-and-traps.md)

#### HTTP Event Collector(HEC)

Cloud based log management. Collect events directly from Cortex Data Lake using HTTP Event Collector.
- [More information about Cortex Data Lake](https://www.paloaltonetworks.com/cortex/cortex-data-lake)
- [Retrieve Cortex Data Lake into Splunk](/firewalls-panorama-and-traps.md)

#### IOT Security

Comprehensive IOT security. Collect IoT alerts and vulnerabilities via API.
- [More information about IoT Security](https://www.paloaltonetworks.com/network-security/iot-security)
- [Bring Traps data into Splunk](/iot-security.md)
 
#### Traps Endpoint Protection

Secure the endpoint domain. Syslog endpoint security and operations events to Splunk.

- [More information about Traps Endpoint Protection](https://www.paloaltonetworks.com/products/secure-the-endpoint/traps)
- [Bring Traps data into Splunk](/firewalls-panorama-and-traps.md)

#### Aperture

Secure your enterprise SaaS application. Splunk reaches out to the Aperture logging API to collect incidents and activity from your SaaS apps.

- [More information about Aperture SaaS Pretection](https://www.paloaltonetworks.com/products/secure-the-cloud/aperture)
- [Bring Aperture data into Splunk](/aperture.md)

#### WildFire

WildFire prevents highly evasive zero-day exploits and malware. Bring context and indicators from WildFire reports into Splunk. Splunk reaches out to the WildFire report API to collect the reports of any malware seen in your network.

- [More information about WildFire Malware Analysis](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/wildfire)
- [Bring WildFire data into Splunk](wildfire.md)

#### AutoFocus and MineMeld

Threat Intelligence to help prioritize and contextualize the rest of your data in Splunk. AutoFocus tags are collected via the AutoFocus API and threat indicators are collected from a MineMeld output feed.

- [More information about AutoFocus](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/autofocus)
- [More information about MineMeld](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/minemeld)
- [Bring AutoFocus and MineMeld data into Splunk](/autofocus-and-minemeld.md)