/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * @hidden
 * Constants File which contains string constants used by this library
 */

// Prefix for all library cache entries
export const CACHE_PREFIX = "msal";

// Resource delimiter - used for certain cache entries
export const RESOURCE_DELIM = "|";

// Placeholder for non-existent account ids/objects
export const NO_ACCOUNT = "NO_ACCOUNT";

// UPN
export const UPN = "upn";

// Consumter UTID
export const CONSUMER_UTID = "9188040d-6c67-4c5b-b112-36a304b66dad";

// Claims
export const CLAIMS = "claims";

// Default scopes
export const OPENID_SCOPE = "openid";
export const PROFILE_SCOPE = "profile";

export enum AuthorityConstants {
    COMMON = "common",
    ORGANIZATIONS = "organizations",
    CONSUMERS = "consumers"
}

/**
 * Keys in the hashParams
 */
export enum ServerHashParamKeys {
    SCOPE = "scope",
    ERROR = "error",
    ERROR_DESCRIPTION = "error_description",
    ACCESS_TOKEN = "access_token",
    ID_TOKEN = "id_token",
    EXPIRES_IN = "expires_in",
    SESSION_STATE = "session_state",
    CLIENT_INFO = "client_info"
};

export const AADTrustedHostList =  {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};

/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
export const ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};

/**
 * @hidden
 * CacheKeys for MSAL
 */
export enum TemporaryCacheKeys {
    AUTHORITY = "authority",
    ACQUIRE_TOKEN_ACCOUNT = "acquireTokenAccount",
    SESSION_STATE = "session.state",
    STATE_LOGIN = "state.login",
    STATE_ACQ_TOKEN = "state.acquireToken",
    STATE_RENEW = "state.renew",
    NONCE_IDTOKEN = "nonce.idtoken",
    LOGIN_REQUEST = "login.request",
    RENEW_STATUS = "token.renew.status",
    URL_HASH = "urlHash",
    ANGULAR_LOGIN_REQUEST = "angular.login.request",
    INTERACTION_STATUS = "interaction.status"
}

export enum PersistentCacheKeys {
    IDTOKEN = "idtoken",
    CLIENT_INFO = "client.info",
    ADAL_ID_TOKEN = "adal.idtoken",
    ERROR = "error",
    ERROR_DESC = "error.description",
    LOGIN_ERROR = "login.error"
}

/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
export const PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};

/**
 * @hidden
 * SSO Types - generated to populate hints
 */
export enum SSOTypes {
    ACCOUNT = "account",
    SID = "sid",
    LOGIN_HINT = "login_hint",
    ID_TOKEN ="id_token",
    DOMAIN_HINT = "domain_hint",
    ORGANIZATIONS = "organizations",
    CONSUMERS = "consumers",
    ACCOUNT_ID = "accountIdentifier",
    HOMEACCOUNT_ID = "homeAccountIdentifier",
    LOGIN_REQ = "login_req",
    DOMAIN_REQ = "domain_req"
};

/**
 * @hidden
 */
export const BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
