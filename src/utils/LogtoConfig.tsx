import { LogtoConfig, UserScope } from "@logto/rn";

export const logtoconfig: LogtoConfig = {
  endpoint: "https://api.logto.maga-services.com/",
  appId: "zbk6xecztff6257lq08hq",
  scopes: [UserScope.Email, UserScope.Phone, UserScope.CustomData, UserScope.Identities, UserScope.Organizations, UserScope.Roles, UserScope.OrganizationRoles, UserScope.Profile],
};
