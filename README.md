# Achtung notifier action

This action sends a notification message to Telegram or Discord or whatever achtung can chats.

Powered by [achtung](https://github.com/D00Movenok/achtung) application.

For setting it up read [achtung manual](https://github.com/D00Movenok/achtung/blob/main/README.md)

## Inputs

### `webhook`

**Required.** Achtung endpoing.

### `token`

**Required.** Achtung token.

### `message`

**Required.** Message text.

### `verify`

Verify certificate.
**Default:** true

## Usage

```yml
- name: Send a chat notification via achtung
  uses: D00Movenok/achtung-action@v1
  with:
    webhook: ${{ secrets.ACHTUNG_WEBHOOK }}
    token: ${{ secrets.ACHTUNG_TOKEN }}
    verify: 'false'
    message: '📦 This is a message from github actions ;)'
```
