/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#alias DnsProvider#alias}
  */
  readonly alias?: string;
  /**
  * update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#update DnsProvider#update}
  */
  readonly update?: DnsProviderUpdate[] | cdktf.IResolvable;
}
export interface DnsProviderUpdateGssapi {
  /**
  * This or `password` is required if `username` is set, not supported on Windows. The path to a keytab file containing a key for `username`. Value can also be sourced from the DNS_UPDATE_KEYTAB environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#keytab DnsProvider#keytab}
  */
  readonly keytab?: string;
  /**
  * This or `keytab` is required if `username` is set. The matching password for `username`. Value can also be sourced from the DNS_UPDATE_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#password DnsProvider#password}
  */
  readonly password?: string;
  /**
  * The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#realm DnsProvider#realm}
  */
  readonly realm?: string;
  /**
  * The name of the user to authenticate as. If not set the current user session will be used. Value can also be sourced from the DNS_UPDATE_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#username DnsProvider#username}
  */
  readonly username?: string;
}

export function dnsProviderUpdateGssapiToTerraform(struct?: DnsProviderUpdateGssapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keytab: cdktf.stringToTerraform(struct!.keytab),
    password: cdktf.stringToTerraform(struct!.password),
    realm: cdktf.stringToTerraform(struct!.realm),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dnsProviderUpdateGssapiToHclTerraform(struct?: DnsProviderUpdateGssapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keytab: {
      value: cdktf.stringToHclTerraform(struct!.keytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface DnsProviderUpdate {
  /**
  * Required if `key_name` is set. When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`. Value can also be sourced from the DNS_UPDATE_KEYALGORITHM environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_algorithm DnsProvider#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The name of the TSIG key used to sign the DNS update messages. Value can also be sourced from the DNS_UPDATE_KEYNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_name DnsProvider#key_name}
  */
  readonly keyName?: string;
  /**
  * Required if `key_name` is set
  * A Base64-encoded string containing the shared secret to be used for TSIG. Value can also be sourced from the DNS_UPDATE_KEYSECRET environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_secret DnsProvider#key_secret}
  */
  readonly keySecret?: string;
  /**
  * The target UDP port on the server where updates are sent to. Defaults to `53`. Value can also be sourced from the DNS_UPDATE_PORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#port DnsProvider#port}
  */
  readonly port?: number;
  /**
  * Enable the Recursion Desired (RD) flag on DNS queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#recursive DnsProvider#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * How many times to retry on connection timeout. Defaults to `3`. Value can also be sourced from the DNS_UPDATE_RETRIES environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#retries DnsProvider#retries}
  */
  readonly retries?: number;
  /**
  * The hostname or IP address of the DNS server to send updates to. Value can also be sourced from the DNS_UPDATE_SERVER environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#server DnsProvider#server}
  */
  readonly server?: string;
  /**
  * Timeout for DNS queries. Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds. Value can also be sourced from the DNS_UPDATE_TIMEOUT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#timeout DnsProvider#timeout}
  */
  readonly timeout?: string;
  /**
  * Transport to use for DNS queries. Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`. Value can also be sourced from the DNS_UPDATE_TRANSPORT environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#transport DnsProvider#transport}
  */
  readonly transport?: string;
  /**
  * gssapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#gssapi DnsProvider#gssapi}
  */
  readonly gssapi?: DnsProviderUpdateGssapi[] | cdktf.IResolvable;
}

export function dnsProviderUpdateToTerraform(struct?: DnsProviderUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_secret: cdktf.stringToTerraform(struct!.keySecret),
    port: cdktf.numberToTerraform(struct!.port),
    recursive: cdktf.booleanToTerraform(struct!.recursive),
    retries: cdktf.numberToTerraform(struct!.retries),
    server: cdktf.stringToTerraform(struct!.server),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    transport: cdktf.stringToTerraform(struct!.transport),
    gssapi: cdktf.listMapper(dnsProviderUpdateGssapiToTerraform, true)(struct!.gssapi),
  }
}


export function dnsProviderUpdateToHclTerraform(struct?: DnsProviderUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: cdktf.stringToHclTerraform(struct!.keySecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recursive: {
      value: cdktf.booleanToHclTerraform(struct!.recursive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: cdktf.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gssapi: {
      value: cdktf.listMapperHcl(dnsProviderUpdateGssapiToHclTerraform, true)(struct!.gssapi),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProviderUpdateGssapiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs dns}
*/
export class DnsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsProvider to import
  * @param importFromId The id of the existing DnsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dns',
      terraformGeneratorMetadata: {
        providerName: 'dns',
        providerVersion: '3.5.0',
        providerVersionConstraint: '~> 3.2'
      },
      terraformProviderSource: 'hashicorp/dns'
    });
    this._alias = config.alias;
    this._update = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // update - computed: false, optional: true, required: false
  private _update?: DnsProviderUpdate[] | cdktf.IResolvable; 
  public get update() {
    return this._update;
  }
  public set update(value: DnsProviderUpdate[] | cdktf.IResolvable | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      update: cdktf.listMapper(dnsProviderUpdateToTerraform, true)(this._update),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update: {
        value: cdktf.listMapperHcl(dnsProviderUpdateToHclTerraform, true)(this._update),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProviderUpdateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
