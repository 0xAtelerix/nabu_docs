---
title: 'How to connect Binance to Nabu: a step-by-step guide'
description: >-
  Connect your Binance account to Nabu by creating a trade-only API key with
  the right permissions, symbol whitelist, and IP restrictions, then linking it
  on the Exchanges tab in Nabu settings.
---

# How to connect Binance to Nabu: a step-by-step guide

Nabu trades on Binance with an API key you create. With it, Nabu can place and cancel orders and read your balances and positions, and only what the key allows. Nabu never asks for withdrawal rights: it cannot withdraw funds or transfer them between accounts. No order is placed by connecting.

## Step 1: Start the connection in Nabu

1\. Go to [app.nabu.pro/?settings=exchanges](https://app.nabu.pro/?settings=exchanges). This opens the **Exchanges** tab of your Nabu settings.

<figure><img src="../../assets/images/settings-exchanges.png" alt="Nabu settings with the Exchanges tab open, showing the Available list with Hyperliquid and Binance, each with a Connect button" width="480"></figure>

2\. Under **Available**, click **Connect** next to **Binance**.

3\. Nabu opens **Create a trade-only API key**, the first of two steps. It sums up what to do on Binance and has a **Copy all IPs** button you need in Step 2. Keep this window open.

<figure><img src="../../assets/images/binance-create-key.png" alt="Step 1 of 2, Create key: Create a trade-only API key, with the Open API Management and Copy all IPs buttons and the I have my key button" width="450"></figure>

## Step 2: Create your API key on Binance

4\. Click **Open API Management**, or go to [binance.com/en/my/settings/api-management](https://www.binance.com/en/my/settings/api-management). Click **Create API** and create a system-generated key.

<figure><img src="../../assets/images/binance-step-3-create-api.png" alt="Binance Create API button" width="624"></figure>

5\. Once the API key is created, save the API key and API secret, then click **Edit Restrictions**.

6\. In the **IP access restrictions** field, select **Restrict access to trusted IPs only (Recommended)**. In Nabu, click **Copy all IPs** and paste all 27 Nabu server IP addresses into the field.

<figure><img src="../../assets/images/binance-step-5-ip-restrictions.png" alt="Binance IP access restrictions field" width="624"></figure>

??? note "All 27 Nabu server IP addresses"
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

7\. Tick **Enable Spot & Margin & Stock Trading** for spot, and **Enable Futures** for perps. Leave **Enable Withdrawals** off.

<figure><img src="../../assets/images/binance-step-6-permissions.png" alt="Binance API permission checkboxes for futures and spot" width="624"></figure>

Note: for futures, make sure your Binance Futures account is set up and funded.

<figure><img src="../../assets/images/binance-step-6-futures-note.png" alt="Binance futures account setup notice" width="466"></figure>

8\. Tick **Enable Symbol Whitelist** and add the assets you want Nabu to trade.

<figure><img src="../../assets/images/binance-step-7-whitelist.png" alt="Binance Enable Symbol Whitelist settings" width="496"></figure>

9\. Save the changes.

## Step 3: Link the key in Nabu

10\. Back in Nabu, click **I have my key**. Under **Paste your API key**, paste your API key and API secret into the **API key** and **API secret** fields, and click **Connect Binance**. The key is encrypted in your browser for Nabu's trading server.

<figure><img src="../../assets/images/binance-paste-key.png" alt="Step 2 of 2, Connect: Paste your API key, with the API key and API secret fields, what Nabu can and can't do, and the Connect Binance button" width="450"></figure>

11\. Privy shows **Link Binance account**. This links the Binance account to your Nabu wallet so your strategies can trade on it. Click **Sign and link**.

<figure><img src="../../assets/images/binance-sign-and-link.png" alt="Privy Link Binance account dialog with the Sign and link button" width="450"></figure>

12\. Nabu shows **Binance connected**: an API key with trade-only access, withdrawals never allowed. Click **Back to My Nabu**.

<figure><img src="../../assets/images/binance-connected.png" alt="Binance connected: API key, trade only. Nabu can place and cancel orders, withdrawals never, revoke anytime in Exchanges" width="450"></figure>

13\. Binance now appears under **Connected** on the **Exchanges** tab, with a green status indicator, the connection date, and the balance. To revoke Nabu's access at any time, click **Disconnect**.

<figure><img src="../../assets/images/binance-exchanges-connected.png" alt="Exchanges tab with Binance under Connected, showing a green status indicator, the connection date, the balance, and a Disconnect button" width="480"></figure>
