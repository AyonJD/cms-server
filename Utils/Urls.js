const BASE_URL = 'http://localhost:5000';
const VERSION = '/api/v1'
const AUTH_URL = `${VERSION}/auth`;
const SIGNUP_URL = `/signup_user`;
const LOGIN_URL = `/login_user`;

// User Urls
const LOGGED_IN_USER = `/logged_in_user`;
const GET_ALL_USER = `/get_all_user`;

// Client Urls
const CREATE_CLIENT = `/create_client`
const GET_ALL_CLIENT = `/get_all_client`
const GET_CLIENT_BY_ID = `/get_client_by_id/:id`

// Meeting and feedback Urls
const SEND_EMAIL_TO_CLIENT = `/send_email_to_client`
const GET_MEETING_BY_ID = `/get_meeting_by_id/:id`
const GET_ALL_MEETING = `/get_all_meeting`
const DELETE_MEETING_BY_ID = `/delete_meeting_by_id/:id`

// Campaign Urls
const SEND_EMAIL_TO_CLIENTS = `/send_email_to_clients`
const GET_CAMPAIGN_BY_ID = `/get_campaign_by_id/:id`
const GET_ALL_CAMPAIGN = `/get_all_campaign`
const DELETE_CAMPAIGN_BY_ID = `/delete_campaign_by_id/:id`

// Service Urls
const CREATE_SERVICE = `/create_service`
const GET_ALL_SERVICE = `/get_all_service`
const GET_SERVICE_BY_ID = `/get_service_by_id/:id`
const UPDATE_SERVICE_BY_ID = `/update_service_by_id/:id`

module.exports = {
    BASE_URL,
    VERSION,
    AUTH_URL,
    SIGNUP_URL,
    LOGIN_URL,
    CREATE_CLIENT,
    GET_ALL_CLIENT,
    GET_CLIENT_BY_ID,
    SEND_EMAIL_TO_CLIENTS,
    SEND_EMAIL_TO_CLIENT,
    GET_MEETING_BY_ID,
    GET_ALL_MEETING,
    DELETE_MEETING_BY_ID,
    GET_CAMPAIGN_BY_ID,
    GET_ALL_CAMPAIGN,
    DELETE_CAMPAIGN_BY_ID,
    CREATE_SERVICE,
    GET_ALL_SERVICE,
    GET_SERVICE_BY_ID,
    UPDATE_SERVICE_BY_ID,
    LOGGED_IN_USER,
    GET_ALL_USER
}