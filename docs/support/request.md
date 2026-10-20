---
title: Submit a request
description: Send the Nabu team a support request. We reply by email within two business days.
status: new
---

# Submit a request

<div class="nabu-request-extra" markdown>

Tell us what happened and we reply by email within two business days. Check the [support guide](index.md) first. Your answer may already be there.

</div>

<div class="nabu-request-sent" id="nabu-request-sent" role="status" hidden>
  <p>Thanks. The team replies to the email address you entered, usually within two business days. Reply to that email to send screenshots.</p>
</div>

<div class="nabu-request-sent admonition failure" id="nabu-request-failed" role="alert" hidden>
  <p class="admonition-title">Request not sent</p>
  <p>Something went wrong. Check your connection and try again. If it keeps failing, ask in <a href="https://t.me/nabupro">Nabu Official on Telegram</a>.</p>
</div>

<form class="nabu-request" id="nabu-request" action="https://formsubmit.co/konstantin@pelagos.network" method="POST">
  <input type="hidden" name="_subject" value="Nabu support request">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_next" value="https://docs.nabu.pro/support/request/?sent=1">
  <input type="text" name="_honey" class="nabu-request__honey" tabindex="-1" autocomplete="off" aria-hidden="true">

  <div class="nabu-request__row">
    <label class="nabu-request__field">
      <span>Your email address <abbr title="required">*</abbr></span>
      <input type="email" name="email" placeholder="you@example.com" autocomplete="email" required>
    </label>
    <label class="nabu-request__field">
      <span>What do you need help with? <abbr title="required">*</abbr></span>
      <select name="topic" required>
        <option value="" disabled selected>Choose a topic</option>
        <option value="Account and login" data-topic="account">Account and login</option>
        <option value="Exchange connection" data-topic="exchange">Exchange connection</option>
        <option value="Deposits and balances" data-topic="deposits">Deposits and balances</option>
        <option value="Agent behavior" data-topic="agent">Agent behavior</option>
        <option value="Orders and execution" data-topic="orders">Orders and execution</option>
        <option value="Campaigns and rewards" data-topic="campaigns">Campaigns and rewards</option>
        <option value="Bug report" data-topic="bug">Bug report</option>
        <option value="Security report" data-topic="security">Security report</option>
      </select>
    </label>
  </div>

  <label class="nabu-request__field">
    <span>Nabu wallet address <abbr title="required">*</abbr></span>
    <input type="text" name="wallet" placeholder="0x..." pattern="0x[0-9a-fA-F]{40}" title="A public address: 0x followed by 40 hex characters." autocomplete="off" spellcheck="false" required>
    <small>Find it in Nabu under your profile. Public address only, starting with 0x.</small>
  </label>

  <label class="nabu-request__field">
    <span>Subject <abbr title="required">*</abbr></span>
    <input type="text" name="subject" maxlength="150" required>
  </label>

  <label class="nabu-request__field">
    <span>Description <abbr title="required">*</abbr></span>
    <textarea name="description" rows="6" placeholder="What did you expect? What happened instead? Steps to reproduce help us most." required></textarea>
    <small>Have a screenshot? Reply with it to the email the team sends you.</small>
  </label>


  <button type="submit" class="md-button md-button--primary nabu-request__submit"><span class="nabu-request__spinner" aria-hidden="true"></span><span class="nabu-request__label">Submit request</span></button>
</form>

<div class="nabu-request-extra" markdown>

!!! warning "Never send secrets"
    Nabu support never asks for your private key, seed phrase, or exchange API secret. Do not put them in a request.

</div>
