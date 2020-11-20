/**
 * Copyright (c) Formium, Inc. and its affiliates.
 *
 * This source code is licensed under the Business Source License license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 *
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/consistent-type-assertions */

/**
 * Project access
 *
 * @public
 */
export interface ProjectAccess {
  /**
   * id of the project
   */
  projectId: string;

  /**
   * access level
   */
  access: ProjectAccessAccess;

  /**
   * if a pending invite is outstanding, the timestamp of that invite
   */
  inviteAt?: string;

  /**
   * if a pending invite is outstanding, the user id of the person who sent the invite
   */
  inviteId?: string;
}

export enum ProjectAccessAccess {
  NONE = <any>'NONE',
  MEMBER = <any>'MEMBER',
  ADMIN = <any>'ADMIN',
}