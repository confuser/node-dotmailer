/* jslint maxlen: 200 */
var prepareRequest = require('./prepare-request')
// Use http://apiconnector.com/v2/help/postman as a guide when updating this.

const accounts = {
  'PostAccountsEmptyRecycleBin': prepareRequest.bind(null, 'POST', 'accounts/empty-recycle-bin')
}

const accountInformation = {
  'GetAccountInfo': prepareRequest.bind(null, 'GET', 'account-info')
}

const addressBook = {
  'DeleteAddressBookById': prepareRequest.bind(null, 'DELETE', 'address-books/{id}'),
  'DeleteAddressBookContacts': prepareRequest.bind(null, 'DELETE', 'address-books/{addressBookId}/contacts'),
  'DeleteAddressBookContactsById': prepareRequest.bind(null, 'DELETE', 'address-books/{addressBookId}/contacts/{contactId}'),
  'GetAddressBookById': prepareRequest.bind(null, 'GET', 'address-books/{id}'),
  'GetAddressBookCampaigns': prepareRequest.bind(null, 'GET', 'address-books/{addressBookId}/campaigns?select={select}&skip={skip}'),
  'GetAddressBookContacts': prepareRequest.bind(null, 'GET', 'address-books/{addressBookId}/contacts?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetAddressBookContactsModifiedSinceDate': prepareRequest.bind(null, 'GET', 'address-books/{addressBookId}/contacts/modified-since/{date}?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetAddressBookContactsScore': prepareRequest.bind(null, 'GET', 'address-books/{addressBookId}/contacts/score?select={select}&skip={skip}'),
  'GetAddressBookContactsUnsubscribedSinceDate': prepareRequest.bind(null, 'GET', 'address-books/{addressBookId}/contacts/unsubscribed-since/{date}?select={select}&skip={skip}'),
  'PostAddressBookContacts': prepareRequest.bind(null, 'POST', 'address-books/{addressBookId}/contacts'),
  'PostAddressBookContactsDelete': prepareRequest.bind(null, 'POST', 'address-books/{addressBookId}/contacts/delete'),
  'PostAddressBookContactsImport': prepareRequest.bind(null, 'POST', 'address-books/{addressBookId}/contacts/import'),
  'PostAddressBookContactsResubscribe': prepareRequest.bind(null, 'POST', 'address-books/{addressBookId}/contacts/resubscribe'),
  'PostAddressBookContactsUnsubscribe': prepareRequest.bind(null, 'POST', 'address-books/{addressBookId}/contacts/unsubscribe'),
  'UpdateAddressBookById': prepareRequest.bind(null, 'PUT', 'address-books/{id}')
}

const addressBooks = {
  'GetAddressBooks': prepareRequest.bind(null, 'GET', 'address-books?select={select}&skip={skip}'),
  'GetAddressBooksPrivate': prepareRequest.bind(null, 'GET', 'address-books/private?select={select}&skip={skip}'),
  'GetAddressBooksPublic': prepareRequest.bind(null, 'GET', 'address-books/public?select={select}&skip={skip}'),
  'PostAddressBook': prepareRequest.bind(null, 'POST', 'address-books')
}

const campaign = {
  'DeleteCampaign': prepareRequest.bind(null, 'DELETE', 'campaigns/{campaignId}'),
  'DeleteCampaignAttachment': prepareRequest.bind(null, 'DELETE', 'campaigns/{campaignId}/attachments/{documentId}'),
  'GetCampaignActivities': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities?select={select}&skip={skip}'),
  'GetCampaignActivitiesSinceDateByDate': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/since-date/{date}?select={select}&skip={skip}'),
  'GetCampaignActivityByContactId': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}'),
  'GetCampaignActivityClicks': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/clicks?select={select}&skip={skip}'),
  'GetCampaignActivityOpens': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/opens?select={select}&skip={skip}'),
  'GetCampaignActivityPageViews': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/page-views?select={select}&skip={skip}'),
  'GetCampaignActivityReplies': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/replies?select={select}&skip={skip}'),
  'GetCampaignActivityRoiDetails': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/roi-details?select={select}&skip={skip}'),
  'GetCampaignActivitySocialBookmarkViews': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/activities/{contactId}/social-bookmark-views?select={select}&skip={skip}'),
  'GetCampaignAddressBooks': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/address-books?select={select}&skip={skip}'),
  'GetCampaignAttachments': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/attachments'),
  'GetCampaignById': prepareRequest.bind(null, 'GET', 'campaigns/{id}'),
  'GetCampaignClicks': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/clicks?select={select}&skip={skip}'),
  'GetCampaignClicksSinceDateByDate': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/clicks/since-date/{date}?select={select}&skip={skip}'),
  'GetCampaignHardBouncingContacts': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/hard-bouncing-contacts?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetCampaignOpens': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/opens?select={select}&skip={skip}'),
  'GetCampaignOpensSinceDateByDate': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/opens/since-date/{date}?select={select}&skip={skip}'),
  'GetCampaignPageViewsSinceDateByDate': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/page-views/since-date/{date}?select={select}&skip={skip}'),
  'GetCampaignRoiDetailsSinceDateByDate': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/roi-details/since-date/{date}?select={select}&skip={skip}'),
  'GetCampaignSocialBookmarkViews': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/social-bookmark-views?select={select}&skip={skip}'),
  'GetCampaignSummary': prepareRequest.bind(null, 'GET', 'campaigns/{campaignId}/summary'),
  'PostCampaignAttachments': prepareRequest.bind(null, 'POST', 'campaigns/{campaignId}/attachments'),
  'PostCampaignCopy': prepareRequest.bind(null, 'POST', 'campaigns/{campaignId}/copy'),
  'UpdateCampaign': prepareRequest.bind(null, 'PUT', 'campaigns/{id}')
}

const campaigns = {
  'GetCampaigns': prepareRequest.bind(null, 'GET', 'campaigns?select={select}&skip={skip}'),
  'GetCampaignsSendBySendId': prepareRequest.bind(null, 'GET', 'campaigns/send/{sendId}'),
  'GetCampaignsWithActivitySinceDate': prepareRequest.bind(null, 'GET', 'campaigns/with-activity-since/{date}?select={select}&skip={skip}'),
  'PostCampaigns': prepareRequest.bind(null, 'POST', 'campaigns'),
  'PostCampaignsSend': prepareRequest.bind(null, 'POST', 'campaigns/send'),
  'PostCampaignsSendTimeOptimised': prepareRequest.bind(null, 'POST', 'campaigns/send-time-optimised')
}

const contact = {
  'DeleteContact': prepareRequest.bind(null, 'DELETE', 'contacts/{id}'),
  'DeleteContactTransactionalDataByEmail': prepareRequest.bind(null, 'DELETE', 'contacts/{email}/transactional-data/{collectionName}'),
  'DeleteContactTransactionalDataById': prepareRequest.bind(null, 'DELETE', 'contacts/{id}/transactional-data/{collectionName}'),
  'GetContactAddressBooks': prepareRequest.bind(null, 'GET', 'contacts/{contactId}/address-books?select={select}&skip={skip}'),
  'GetContactByEmail': prepareRequest.bind(null, 'GET', 'contacts/{email}'),
  'GetContactById': prepareRequest.bind(null, 'GET', 'contacts/{id}'),
  'GetContactPreferencesByEmail': prepareRequest.bind(null, 'GET', 'contact/{email}/preferences'),
  'GetContactPreferencesById': prepareRequest.bind(null, 'GET', 'contact/{id}/preferences'),
  'GetContactScoreByEmail': prepareRequest.bind(null, 'GET', 'contacts/{email}/score'),
  'GetContactScoreById': prepareRequest.bind(null, 'GET', 'contacts/{id}/score'),
  'GetContactTransactionalDataByCollectionNameByEmail': prepareRequest.bind(null, 'GET', 'contacts/{email}/transactional-data/{collectionName}'),
  'GetContactTransactionalDataByCollectionNameById': prepareRequest.bind(null, 'GET', 'contacts/{id}/transactional-data/{collectionName}'),
  'UpdateContact': prepareRequest.bind(null, 'PUT', 'contacts/{id}'),
  'UpdateContactPreferencesByEmail': prepareRequest.bind(null, 'PUT', 'contact/{email}/preferences'),
  'UpdateContactPreferencesById': prepareRequest.bind(null, 'PUT', 'contact/{id}/preferences'),
  'UpdateContactWithConsentAndPreferences': prepareRequest.bind(null, 'PUT', 'contacts/{id}/with-consent-and-preferences')
}

const contacts = {
  'DeleteContactsTransactionalData': prepareRequest.bind(null, 'DELETE', 'contacts/transactional-data/{collectionName}/{key}'),
  'GetContacts': prepareRequest.bind(null, 'GET', 'contacts?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetContactsCreatedSinceDate': prepareRequest.bind(null, 'GET', 'contacts/created-since/{date}?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetContactsImportByImportId': prepareRequest.bind(null, 'GET', 'contacts/import/{importId}'),
  'GetContactsImportReport': prepareRequest.bind(null, 'GET', 'contacts/import/{importId}/report'),
  'GetContactsImportReportFaults': prepareRequest.bind(null, 'GET', 'contacts/import/{importId}/report-faults'),
  'GetContactsModifiedSinceDate': prepareRequest.bind(null, 'GET', 'contacts/modified-since/{date}?withFullData={withFullData}&select={select}&skip={skip}'),
  'GetContactsScore': prepareRequest.bind(null, 'GET', 'contacts/score?select={select}&skip={skip}'),
  'GetContactsScoreModifiedSinceDate': prepareRequest.bind(null, 'GET', 'contacts/score/modified-since/{date}?select={select}&skip={skip}'),
  'GetContactsSuppressedSinceDate': prepareRequest.bind(null, 'GET', 'contacts/suppressed-since/{date}?select={select}&skip={skip}'),
  'GetContactsTransactionalDataByKey': prepareRequest.bind(null, 'GET', 'contacts/transactional-data/{collectionName}/{key}'),
  'GetContactsTransactionalDataImportByImportId': prepareRequest.bind(null, 'GET', 'contacts/transactional-data/import/{importId}'),
  'GetContactsTransactionalDataImportReport': prepareRequest.bind(null, 'GET', 'contacts/transactional-data/import/{importId}/report'),
  'GetContactsUnsubscribedSinceDate': prepareRequest.bind(null, 'GET', 'contacts/unsubscribed-since/{date}?select={select}&skip={skip}'),
  'PostContacts': prepareRequest.bind(null, 'POST', 'contacts'),
  'PostContactsImport': prepareRequest.bind(null, 'POST', 'contacts/import'),
  'PostContactsTransactionalDataByKey': prepareRequest.bind(null, 'POST', 'contacts/transactional-data/{collectionName}/{key}'),
  'PostContactsTransactionalData': prepareRequest.bind(null, 'POST', 'contacts/transactional-data/{collectionName}'),
  'PostContactsTransactionalDataImport': prepareRequest.bind(null, 'POST', 'contacts/transactional-data/import/{collectionName}'),
  'PostContactsUnsubscribe': prepareRequest.bind(null, 'POST', 'contacts/unsubscribe'),
  'PostContactsResubscribe': prepareRequest.bind(null, 'POST', 'contacts/resubscribe'),
  'PostContactsWithConsentAndPreferences': prepareRequest.bind(null, 'POST', 'contacts/with-consent-and-preferences')
}

const customFromAddresses = {
  'GetCustomFromAddresses': prepareRequest.bind(null, 'GET', 'custom-from-addresses?select={select}&skip={skip}')
}

const dataFields = {
  'DeleteDataField': prepareRequest.bind(null, 'DELETE', 'data-fields/{name}'),
  'GetDataFields': prepareRequest.bind(null, 'GET', 'data-fields'),
  'PostDataFields': prepareRequest.bind(null, 'POST', 'data-fields')
}

const documentFolders = {
  'GetDocumentFolderDocuments': prepareRequest.bind(null, 'GET', 'document-folders/{folderId}/documents'),
  'GetDocumentFolders': prepareRequest.bind(null, 'GET', 'document-folders'),
  'PostDocumentFolder': prepareRequest.bind(null, 'POST', 'document-folders/{folderId}'),
  'PostDocumentFolderDocuments': prepareRequest.bind(null, 'POST', 'document-folders/{folderId}/documents')
}

const email = {
  'GetEmailStatsSinceDateByStartDate': prepareRequest.bind(null, 'GET', 'email/stats/since-date/{startDate}?endDate={endDate}&aggregatedBy={aggregatedBy}'),
  'PostEmail': prepareRequest.bind(null, 'POST', 'email'),
  'PostEmailTriggeredCampaign': prepareRequest.bind(null, 'POST', 'email/triggered-campaign')
}

const imageFolders = {
  'GetImageFolderById': prepareRequest.bind(null, 'GET', 'image-folders/{id}'),
  'GetImageFolders': prepareRequest.bind(null, 'GET', 'image-folders'),
  'PostImageFolder': prepareRequest.bind(null, 'POST', 'image-folders/{id}'),
  'PostImageFolderImages': prepareRequest.bind(null, 'POST', 'image-folders/{folderId}/images')
}

const preference = {
  'DeletePreference': prepareRequest.bind(null, 'DELETE', 'preference/{id}'),
  'PostPreference': prepareRequest.bind(null, 'POST', 'preference'),
  'UpdatePreference': prepareRequest.bind(null, 'PUT', 'preference')
}

const preferences = {
  'GetPreferences': prepareRequest.bind(null, 'GET', 'preferences'),
  'GetPreferencesModifiedSinceDate': prepareRequest.bind(null, 'GET', 'preferences/modified-since/{date}')
}

const programs = {
  'GetProgramById': prepareRequest.bind(null, 'GET', 'programs/{id}'),
  'GetPrograms': prepareRequest.bind(null, 'GET', 'programs?select={select}&skip={skip}'),
  'GetProgramsEnrolmentByEnrolmentId': prepareRequest.bind(null, 'GET', 'programs/enrolments/{enrolmentId}'),
  'GetProgramsEnrolmentByStatus': prepareRequest.bind(null, 'GET', 'programs/enrolments/{status}?select={select}&skip={skip}'),
  'GetProgramsEnrolmentReportFaults': prepareRequest.bind(null, 'GET', 'programs/enrolments/{enrolmentId}/report-faults'),
  'PostProgramsEnrolments': prepareRequest.bind(null, 'POST', 'programs/enrolments')
}

const segments = {
  'GetSegments': prepareRequest.bind(null, 'GET', 'segments?select={select}&skip={skip}'),
  'GetSegmentsRefreshById': prepareRequest.bind(null, 'GET', 'segments/refresh/{id}'),
  'PostSegmentsRefresh': prepareRequest.bind(null, 'POST', 'segments/refresh/{id}')
}

const server = {
  'GetServerTime': prepareRequest.bind(null, 'GET', 'server-time')
}

const sms = {
  'PostSmsMessagesSendTo': prepareRequest.bind(null, 'POST', 'sms-messages/send-to/{telephoneNumber}')
}

const surveys = {
  'GetSurveys': prepareRequest.bind(null, 'GET', 'surveys?assignedToAddressBookOnly={assignedToAddressBookOnly}&select={select}&skip={skip}'),
  'GetSurveysById': prepareRequest.bind(null, 'GET', 'surveys/{id}'),
  'GetSurveysFields': prepareRequest.bind(null, 'GET', 'surveys/{id}/fields'),
  'GetSurveysResponses': prepareRequest.bind(null, 'GET', 'surveys/{id}/responses?select={select}&skip={skip}'),
  'GetSurveysResponsesWithActivitySinceDate': prepareRequest.bind(null, 'GET', 'surveys/{id}/responses/with-activity-since/{date}?select={select}&skip={skip}'),
  'GetSurveysWithActivitySinceDate': prepareRequest.bind(null, 'GET', 'surveys/with-activity-since/{date}?assignedToAddressBookOnly={assignedToAddressBookOnly}&select={select}&skip={skip}')
}

const templates = {
  'GetTemplateById': prepareRequest.bind(null, 'GET', 'templates/{id}'),
  'GetTemplates': prepareRequest.bind(null, 'GET', 'templates?select={select}&skip={skip}'),
  'PostTemplates': prepareRequest.bind(null, 'POST', 'templates'),
  'UpdateTemplate': prepareRequest.bind(null, 'PUT', 'templates/{id}')
}

module.exports = {
  accounts,
  accountInformation,
  addressBook,
  addressBooks,
  campaign,
  campaigns,
  contact,
  contacts,
  customFromAddresses,
  dataFields,
  documentFolders,
  email,
  imageFolders,
  preference,
  preferences,
  programs,
  segments,
  server,
  sms,
  surveys,
  templates
}
