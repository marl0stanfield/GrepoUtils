GM_config.init(
{
  'id' : 'MaConfig',
  'title': '[Vib-R] GrepoUtils v1.1.2',
  'fields' : // objet champs
  {
    'TozsdeBot_Enabled' :
    {
      'étiquette' : 'Activé',
      'section' : ['ExchangeBot'],
      'title': 'Si le débit de stock doit être activé.',
      'type' : 'case à cocher',
      'par défaut' : faux
    },
     'TozsdeBot_TickInterval' :
    {
      'étiquette' : 'Fréquence',
      'type' : 'entier',
      'title': 'Combien de secondes pour passer à la prochaine ville.',
      'par défaut' : '5'
    },
    'TozsdeBot_MinimalResource':
    {
      'label' : 'Quantité minimale de matière première',
      'type' : 'entier',
      'title': 'Quel devrait être le produit minimum que vous envoyez à la bourse.',
      'par défaut' : '150'
    },
    'TozsdeBot_CaptchaDetection' :
    {
      'label' : 'Captcha détection',
      'title': 'Reconnaît quand le captcha est affiché.',
      'type' : 'case à cocher',
      'par défaut' : vrai
    },
    'TozsdeBot_URL':
    {
      'label': 'Captcha Hang URL',
      'type' : 'texte',
      'title': 'Si le captcha est affiché, jouez ce son.',
      'taille' : 250,
      'par défaut' : 'https://notificationsounds.com/storage/sounds/file-sounds-1134-open-up.mp3'
    },
    'AntiGrepolisUpdate_Enabled' :
    {
      'étiquette' : 'Activé',
      'section': ['Actualiser la page après mise à jour des serveurs grepolis'],
      'title': 'Pour actualiser la page. (Regarde chaque minute) ',
      'type' : 'case à cocher',
      'par défaut' : faux
    },
    'Villes':
    {
      'label' : 'Városok', // Apparaît à côté du champ
      'type' : 'select', // Fait de ce paramètre une liste déroulante
      'options' : ['-'], // Choix possibles
      'default' : '-' // Valeur par défaut si l'utilisateur ne la modifie pas
    }
  }
});
