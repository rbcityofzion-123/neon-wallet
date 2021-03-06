const INPUTS = {
  inputSelectPlaceholder: 'Sélectionner',
  inputPasswordPlaceholder: 'Mot de passe',
  inputEncryptedPlaceholder: 'Clé chiffrée',
  authPrivateKeyPlaceholder: 'Entrer votre clé privée ici',
  authWatchPlaceholder: 'Entrer une adresse NEO ici',
}

const VARIOUS_MISSING_TRANSLATIONS = {
  'auth.cancel': 'Cancel',
  'auth.ledger.connectLedger':
    'Connect and unlock your <strong>Ledger device</strong>',
  'auth.ledger.navigateToNeoApp':
    'Navigate to the <strong>NEO app</strong> on your device',
  'auth.ledger.retry': 'Retry?',
  'auth.ledger.fetchAddress': 'Fetch additional addresses',
  publicAddress: 'Public Address',
  'auth.import.recoveryInstructions':
    'Upload a JSON wallet recovery file here to add your accounts to Neon. This option is also available on the Settings page.',
  importFile: 'Import File',
  dashboardTokenBalancesPrice: 'PRICE',
  dashboardTokenBalancesHoldings: 'HOLDINGS',
  settingsLanguageLabel: 'LANGUAGE',
  addToken: 'Add Token',
  contactsPageLabel: 'Manage Contacts',
  newContact: 'New Contact',
  deleteLabel: 'Delete',

  addToContacts: 'Add to contacts',
  contactName: 'Name',
  enterAContactName: 'Enter Contact Name...',
  enterAWalletAddress: 'Enter Wallet Address...',
  contactWalletAddress: 'Wallet Address',
  editAContact: 'Edit A Contact',
  modifyDetails: 'Modify Details',
  removeContact: 'Remove Contact',
  saveContactButtonText: 'Save Contact',

  editContactDisclaimer:
    'Please review and ensure that you have entered the address correctly to avoid loss of funds',
  addAContact: 'Add A Contact',
  addContactDetails: 'Add Contact Details',
  confirmRemoveContact: 'Please confirm removing contact',
  modalActionConfirm: 'Confirm',
  modalActionCancel: 'Cancel',
  newsPageLabel: 'News',
  networkSettingsLabel: 'Network Settings',

  walletManagerNoLocalInfo:
    'It looks like you have no wallet information saved locally...',

  walletManagerRemoveWallet: 'Remove Wallet',

  selectAssets: 'Select Assets',
  priorityTransfer: 'Priority Transfer',

  editRecipients: 'Edit Recipients',
  confirmAndSend: 'Confirm & Send',
  fee: 'Fee:',
  sendMoreAssets: 'Send More Assets',
  transactionId: 'Transaction ID:',
  numberofTransactionsPending:
    '{transferCount, number} {transferCount, plural, one {Transfer} other {Transfers}} pending',
  assetRecipients:
    'Asset {transferCount, plural, one {Recipient} other {Recipients}}',
  confirmation: 'Confirmation',
  confirmationRecipient:
    '{transferCount, number} {transferCount, plural, one {Recipient} other {Transfers}}',
  completeExclaim: 'Complete!',
  sendQRExplanation:
    // eslint-disable-next-line
    "So you've been given a QR code? Click capture and hold it up to your camera.",
  captureQR: 'Capture',
  captureQRCaps: 'CAPTURE',
}
const AUTH = {
  authLogin: 'Connexion',
  authSaved: 'SAUVÉ',
  authPrivate: 'CLÉ PRIVÉE',
  authEncrypted: 'CLÉ CHIFFRÉE',
  authWatch: 'VISUALISER',
  authLedger: 'LEDGER',
  authCreateWallet: 'Créer portefeuille',
  authImportWallet: 'Importer portefeuille',
  authScanQRButton: 'Scanner code QR',
  authLoginButton: 'Connexion',
  authLedgerFirstStep: 'Connecter et déverouiller votre Ledger',
  authLedgerSecondStep: 'Sélectionner l`application NEO sur votre périphérique',
  authLedgerAddressLabel: 'ADRESSE PUBLIQUE',
}

const WALLET_CREATION = {
  createANewWallet: 'Créer nouveau portefeuille',
  walletCreationInstruction: 'Entrer détails',
  walletCreationWalletNameLabel: 'NOM DU PORTEFEUILLE',
  walletCreationWalletNamePlaceholder: 'Nom du portefeuille',
  walletCreationWalletPasswordLabel: 'Phrase secrète',
  walletCreationWalletPasswordPlaceholder: 'Mot de passe',
  walletCreationWalletPasswordConfirmLabel: 'Confirmer mot de passe',
  walletCreationWalletPasswordConfirmPlaceholder: 'Confirmer mot de passe',
  walletCreationButton: 'Créer portefeuille',
  walletCreatedHeader: 'Portefeuille créé !',
  walletCreatedDisclaimer:
    '<b>Sauvegarder ces détails !</b> Si vous perdez ces identifiants, vous perdrez l`accès à vos actifs.',
  privateKeyLabel: 'CLÉ PRIVÉE',
  encryptedKeyLabel: 'CLÉ CHIFFRÉE',
  addressLabel: 'ADRESSE PUBLIQUE',
  splitKeyLabel: 'Divisé CLÉ',
  recoverWalletLabel: 'PORTEFEUILLE DE RÉCUPÉRATION',
  print: 'Imprimer',
  generateQrCodes: 'Générer codes QR',
  copyCodeImage: 'Copier le code QR',
}

const DASHBOARD = {
  dashboardBalancePanelLabel: 'Solde de jetons',
  dashboardAssetsPanelLabel: 'Actifs systèmes',
  dashboardAssetsTotal: 'TOTAL',
  dashboardMarketDataLabel: 'Données du marché',
  dashboardValueLabel: 'Valeur totale du portefeuille',
  dashboardAddressLabel: 'Adresse:',
  dashboardPriceNotAvailable: 'N/A',
  dashboardGasClaimButton: 'Réclamer {amount} GAS',
  dashboardManageWallets: 'Gérer portefeuilles',
  dashboardRefresh: 'Rafraîchir',
  dashboardTokenBalancesToken: 'Jeton',
  dashboardMarketData1Day: '1 JOUR',
  dashboardMarketData1Week: '1 SEMAINE',
  dashboardMarketData1Month: '1 MOIS',
}

const SIDEBAR = {
  sidebarWallet: 'Portefeuille',
  sidebarActivity: 'Activité',
  sidebarSend: 'Envoyer',
  sidebarReceive: 'Recevoir',
  sidebarContacts: 'Contacts',
  sidebarTokenSale: 'Vente de jetons',
  sidebarNews: 'Actualités',
  sidebarSettings: 'Paramètres',
  sidebarLogout: 'Déconnexion',
  sidebarCurrentBlock: 'BLOC ACTUEL',
}

const MANAGE_WALLETS = {
  manageWalletsLabel: 'Gérer portefeuilles',
  manageWalletsImport: 'Importer',
  manageWalletsCreate: 'Créer',
  manageWalletsEdit: 'Éditer',
  manageWalletsEditWallet: 'Éditer portefeuille',
  manageWalletsEditWalletInstructions: 'Modifier détails',
  manageWalletsEditWalletNameLabel: 'NOM DU PORTEFEUILLE',
  manageWalletsEditWalletNamePlaceholder: 'Nom du portefeuille',
  manageWalletsEditWalletAddressLabel: 'ADRESSE DU PORTEFEUILLE',
  manageWalletsEditWalletSave: 'Sauvegarder changements',
}

const ACTIVITY = {
  activityAddAddress: 'Ajouter',
  activityViewTx: 'Voir',
  activityPageLabel: 'Toute les activités',
  activityExport: 'Exporter',
}

const RECEIVE = {
  recieveSelectMethod: 'Sélectionner la méthode de dépôt',
  receiveAssetsAddressLabel: 'Votre adresse publique',
  receivePageLabel: 'Recevoir des actifs',
  receiveYourAddressTabLabel: 'VOTRE ADRESSE',
  receiveCopyCodeButton: 'Copier le code QR',
  receiveDisclaimer:
    'N`envoyer que des actifs qui sont <b>compatibles avec la blockchain NEO (NEO, GAS, etc.)</b>. Envoyer d`autres types d`actifs résultera en leur perte.',
  receiveRequestTabAssets: 'DEMANDER DES ACTIFS',
  recieveWhyUseQRLabel: 'Pourquoi utiliser un code QR ?',
  receiveQRExplanation:
    '<p>Déjà envoyé des actifs à la mauvaise adresse à cause d`un mauvais caractère dans l`adresse du portefeuille ?</p><p>Si non, vous êtes chanceux - mais cela arrive regulièrement.</p><p>Ici à COZ, nous voulons nous assurer que les gens qui vous paient ont les détails corrects. Vous pouvez générer un code QR pour demander des actifs pour leur simplifier la tâche.</p><p>Chaque code que vous générez inclura votre adresse de portefeuille, une quantité d`actifs ainsi qu`une référence - tous ces paramètres étant définis par vous-même.',
}

const REQUEST_ASSETS = {
  requestAssetLabel: 'ACTIF',
  requestAssetAmountLabel: 'Montant',
  requestAssetAmount: 'MONTANT',
  requestAssetDepositLabel: 'DÉPOSER DANS CE PORTEFEUILLE',
  requestAssetRefLabel: 'RÉFÉRENCE',
  requestAssetRefPlaceholder: 'Ajouter une note...',
  requestAssetQRButton: 'Générer code QR',
  requestAssetYourQRHeader: 'Votre code QR',
  requestAssetsPaymentDetails: 'DÉTAILS DE LA DEMANDE DE PAIEMENT',
  requestAssetsYourQRLabel: 'VOTRE CODE QR',
  requestAssetsRefLabel: 'RÉFÉRENCE',
  requestAssetsAddressLabel: 'ADRESSE',
  requestAssetsAmountLabel: 'MONTANT',
  requestAssetsAssetLabel: 'ACTIF',
}

const TRANSACTION_FEE = {
  transactionFeeQuestion: 'Prioriser votre transaction avec des frais ?',
  fast: 'Rapide',
  faster: 'Plus rapide',
  fastest: 'Tres rapide',
  sendWithFee:
    'Envoyer {itemCount, plural, one {Actif} other {Actifs}} Avec Des Drais',
  sendWithoutFee:
    'Envoyer {itemCount, plural, one {Actif} other {Actifs}} Sans Frais',
  asset: 'Actif',
  assets: 'Actifs',
}

const SEND = {
  sendPageLabel: 'Envoyer des actifs',
  sendImport: 'Importer',
  sendEnterQRCode: 'Entrer code QR',
  sendAdd: 'Ajouter destinataire',
  sendAssetLabel: 'ACTIF',
  sendAmountLabel: 'MONTANT',
  sendAddressLabel: 'ADRESSE DU DESTINATAIRE',
  sendAddressPlaceholder: 'Ajouter portefeuille ou sélectionner contact',
  sendTranfer: 'TRANSFÉRER',
  sendMaxAmount: 'MAX',
  sendTransferPlural: 'TRANSFERTS',
  sendAsset: 'actif',
  sendAssets: 'actifs',
  sendRecipient: 'destinataire',
  sendRecipients: 'destinataires',
  sendAssetCapital: 'Actif',
  sendAssetsCapital: 'Actifs',
  sendRecipientCapital: 'Destinataire',
  sendRecipientsCapital: 'Destinataires',
  sendCompleteNotification:
    'Transaction en attente ! Votre solde sera automatiquement mise a jour lorsque la blockchain l`aura traitée.',
  sendSelectAssets:
    'Sélectionner actifs {transferCount, number} de {maxNumberOfRecipients, number} destinataires',
  sendTransferMessage:
    '{transferCount, number} {transferCount, plural, one {sendTransfer} other {sendTransferPlural}} en attente',
  sendBroadcasting: 'Diffusion de la transaction vers le réseau...',
  sendDisclaimer:
    'Veuillez vérifier et vous assurer d`avoir entré les détails corrects pour éviter une perte des fonds.',
  sendActivityLink:
    'Vérifier le statut de votre transaction dans l`onglet activité.',
  sendCompletion:
    'Terminé ! {transferCount, number} {transferCount, plural, one {sendAsset} other {sendAssets}} à {transferCount, plural, one {sendRecipient} other {sendRecipients}}',
}

const SETTINGS = {
  settingsNetworkConfigLabel: 'CONFIGURATION RÉSEAU',
  settingCurrencyLabel: 'MONNAIE',
  settingsThemeLabel: 'THÈME',
  settingsSoundLabel: 'SON',
  settingsEncryptLink: 'CHIFFRER UNE CLÉ',
  recoverWallet: 'RESTAURER UN PORTEFEUILLE',
  settingsRecoverWalletLink: 'IMPORTER',
  settingsBackUpLinkLabel: 'SAUVEGARDER PORTEFEUILLE',
  settingsBackUpLink: 'EXPORTER',
  settingsManageLabel: 'Gérer votre portefeuille Neon',
  settingsCommunity: 'Support communautaire',
  settingsDonationLink:
    'Créé par COZ. Donations: Adr3XjZ5QDzVJrWvzmsTTchpLRRGSzgS5A',
}

const NETWORK_SETTINGS = {
  networkSettingsInstructions:
    'Gérer tous les paramètres réseaux relatifs a l`interaction de Neon avec la blockchain',
  networkSettingsNodeSelectLabel: 'SÉLECTION DE NŒUDS',
  networkSettingsExplorerLabel: 'EXPLORATEUR DE BLOCS',
  networkSettingsCurrentLabel: 'RÉSEAU ACTUEL',
  networkSettingsAutomatic: 'AUTOMATIQUE',
}

const NODE_SELECTION = {
  nodeSelectPanelHeader: 'Sélection de noeuds',
  nodeSelectionInstructions:
    'Si vous rencontrez des problèmes de performance, essayer de sélectionner un noeud personalisé ci-dessous',
  nodeSelectSelectAutomatically: 'Sélectionner automatiquement',
  nodeSelectInfo: 'Top {nodeCount, number} noeuds listés',
  nodeSelectBlockHeight: 'Hauteur de bloc',
}

const ENCRYPT_KEY = {
  encryptPanelHeader: 'Chiffrer une clé',
  encryptInstructions:
    'Choisisser une phrase secrète pour chiffrer une clé existante',
  encryptStep1Label: '1) ENTRER LA CLÉ PRIVÉE QUE VOUS SOUHAITEZ CHIFFRER',
  encryptStep1Placeholder: 'Entrer la clé',
  encryptStep2Label: '2) CRÉER UNE PHRASE SECRÈTE',
  encryptStep2Placeholder: 'Entrer phrase secrète',
  encryptStep3Label: '3) CONFIRMER LA PHRASE SECRÈTE',
  encryptStep3Placeholder: 'Confirmer phrase secrète',
  encryptButton: 'Générer clé chiffrée',
}

const TOKEN_SALE = {
  tokenSalePageHeader: 'Participer à une vente de jetons',
  tokenSaleDisclaimer1:
    'Veuillez lire et approuver ces conditions pour continuer',
  tokenSaleDiclaimer2:
    'Je comprends que soumettre NEO our GAS à de multiples reprises peut entraîner une perte de fonds ou un remboursement retardé, dépendamment de la politique de l`ICO.',
  tokenSaleDisclaimer3:
    'Je comprends que certaines ventes peuvent n`accepter que NEO ou GAS et j`ai verifié ce qui etait accepté.',
  tokenSaleDisclaimer4:
    'Je comprends que si j`envoie NEO ou GAS à une vente de jetons qui s`est dejà terminée, je perdrai mes NEO/GAS et ne serait pas remboursé.',
  // eslint-disable-next-line
  tokenSaleDiclaimer5: `Je comprends que COZ n'est pas responsable de mon utilisation de cette fonctionalité et jai verifié les licenses de ce logiciel.`,
}

export default {
  ...AUTH,
  ...INPUTS,
  ...WALLET_CREATION,
  ...DASHBOARD,
  ...SIDEBAR,
  ...MANAGE_WALLETS,
  ...ACTIVITY,
  ...RECEIVE,
  ...REQUEST_ASSETS,
  ...TRANSACTION_FEE,
  ...SEND,
  ...SETTINGS,
  ...NETWORK_SETTINGS,
  ...NODE_SELECTION,
  ...ENCRYPT_KEY,
  ...TOKEN_SALE,
  ...VARIOUS_MISSING_TRANSLATIONS,
}
