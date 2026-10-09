---
title: 'How to connect Binance to Nabu: a step-by-step guide'
description: >-
  Connect your Binance account to Nabu by creating an API key with the right
  permissions, symbol whitelist, and IP restrictions, then linking it in Nabu
  settings.
---

# How to connect Binance to Nabu: a step-by-step guide

## Step 1: Start the connection in Nabu

1\. Go to [app.nabu.pro/?settings=connect](https://app.nabu.pro/?settings=connect). This opens the **Connect** tab of your Nabu settings.

<figure><img src="../../assets/images/settings-connect.jpg" alt="Nabu settings with the Connect tab open, showing the Exchange Connect form with the Connect Exchange Account selector and the Link Exchange button" width="480"></figure>

2\. Under **Connect Exchange Account**, select **Binance**.

<figure><img src="../../assets/images/binance-step-2-connect.jpg" alt="Connect Exchange Account form with Binance selected, showing the API Key and API Secret fields and the Link Exchange button" width="450"></figure>

## Step 2: Create your API key on Binance

3\. Head to [binance.com/en/my/settings/api-management](https://www.binance.com/en/my/settings/api-management) and click on **Create API** to create your API key.

<figure><img src="../../assets/images/binance-step-3-create-api.png" alt="Binance Create API button" width="624"></figure>

4\. Once the API is created, save the API key and API secret, then click **Edit Restrictions**.

5\. First, in the **IP access restrictions** field select **Restrict access to trusted IPs only (Recommended)** and use all of the IP addresses indicated below:

- `80.74.29.150`
- `85.137.89.6`
- `85.137.89.215`
- `85.137.93.20`
- `85.137.93.27`
- `85.137.95.185`
- `88.218.121.177`
- `88.218.122.178`
- `89.46.131.2`
- `89.150.59.63`
- `91.132.59.51`
- `95.81.99.62`
- `95.81.100.102`
- `85.137.95.192`
- `85.137.95.193`
- `88.218.120.37`
- `88.218.120.110`
- `88.218.120.195`
- `88.218.121.115`
- `88.218.121.123`
- `88.218.121.149`
- `88.218.122.91`
- `88.218.122.136`
- `88.218.122.233`
- `88.218.123.95`
- `88.218.123.246`
- `89.46.131.116`

<figure><img src="../../assets/images/binance-step-5-ip-restrictions.png" alt="Binance IP access restrictions field" width="624"></figure>

6\. For futures and spot, make sure that the following fields are ticked: **Enable Futures** and **Enable Spot & Margin & Stock Trading**.

<figure><img src="../../assets/images/binance-step-6-permissions.png" alt="Binance API permission checkboxes for futures and spot" width="624"></figure>

Note: for futures, make sure your Binance Futures account is set up and funded.

<figure><img src="../../assets/images/binance-step-6-futures-note.png" alt="Binance futures account setup notice" width="466"></figure>

7\. Tick the **Enable Symbol Whitelist** field and ensure to add assets that you would like to whitelist for trading purposes.

<figure><img src="../../assets/images/binance-step-7-whitelist.png" alt="Binance Enable Symbol Whitelist settings" width="496"></figure>

8\. Once completed, save the changes.

## Step 3: Nabu exchange settings

9\. Return to the **Connect** tab at [app.nabu.pro/?settings=connect](https://app.nabu.pro/?settings=connect). With **Binance** selected under **Connect Exchange Account**, paste your API key and API secret into the **API Key** and **API Secret** fields, and click **Link Exchange**.

10\. Binance now appears under **Connected** with a green status indicator.

<figure><img src="../../assets/images/binance-step-10-connected.jpg" alt="Connected list showing Binance with a green status indicator and a remove action" width="450"></figure>
