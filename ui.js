GM_config.init(
{
  'id': 'MyConfig', // The id used for this instance of GM_config
  'fields': // Fields object
  {
    'TozsdeBot_Enabled':
    {
      'label': 'Bekapcsolva',
      'section': ['TőzsdeBot'],
      'title': 'Be legyen-e kapcsolva a tőzsdebot.',
      'type': 'checkbox',
      'default': false
    }
    'TozsdeBot_TickInterval':
    {
      'label': 'Gyakoriság',
      'section': ['TőzsdeBot'],
      'type': 'int',
      'title': 'Hány másodpercenként váltson át a következő városra.',
      'size': 250,
      'default': 'https://notificationsounds.com/storage/sounds/file-sounds-1134-open-up.mp3'
    }
    'TozsdeBot_CaptchaDetection':
    {
      'label': 'Captcha-felismerés',
      'section': ['TőzsdeBot'],
      'title': 'Felismeri, ha megjelenik a captcha.',
      'type': 'checkbox',
      'default': true
    }
    'TozsdeBot_URL':
    {
      'label': 'Captcha Hang URL',
      'section': ['TőzsdeBot'],
      'type': 'text',
      'title': 'Ha megjelenik a captcha, lejátssza ezt a hangot.',
      'size': 250,
      'default': 'https://notificationsounds.com/storage/sounds/file-sounds-1134-open-up.mp3'
    }
  }
});
