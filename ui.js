GM_config.init(
{
  'id': 'MyConfig',
  'title': '[Vib-R] GrepoUtils v1.1.2',
  'fields': // Fields object
  {
    'TozsdeBot_Enabled':
    {
      'label': 'Activé',
      'section': ['TőzsdeBot'],
      'title': 'Si le débit de stock doit être activé.',
      'type': 'checkbox',
      'default': false
    },
     'TozsdeBot_TickInterval':
    {
      'label': 'Fréquence',
      'type': 'int',
      'title': 'Combien de secondes pour passer à la prochaine ville.',
      'default': '5'
    },
    'TozsdeBot_MinimalResource':
    {
      'label': 'Quantité minimale de matière première',
      'type': 'int',
      'title': 'Quel devrait être le produit minimum que vous envoyez à la bourse.',
      'default': '150'
    },
    'TozsdeBot_CaptchaDetection':
    {
      'label': 'Captcha détection',
      'title': 'Reconnaît quand le captcha est affiché.',
      'type': 'checkbox',
      'default': true
    },
    'TozsdeBot_URL':
    {
      'label': 'Captcha Hang URL',
      'type': 'text',
      'title': 'Si le captcha est affiché, jouez ce son.',
      'size': 250,
      'default': 'https://notificationsounds.com/storage/sounds/file-sounds-1134-open-up.mp3'
    },
    'AntiGrepolisUpdate_Enabled':
    {
      'label': 'Bekapcsolva',
      'section': ['Actualiser la page après mise à jour des serveurs grepolis'],
      'title': 'Pour actualiser la page. (Regarde chaque minute) ',
      'type': 'checkbox',
      'default': false
    },
    'Cities':
    {
      'label': 'Városok', // Appears next to field
      'type': 'select', // Makes this setting a dropdown
      'options': ['-'], // Possible choices
      'default': '-' // Default value if user doesn't change it
    }
  }
});
