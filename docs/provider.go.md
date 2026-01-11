# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-dns.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsProvider <a name="DnsProvider" id="@cdktn/provider-dns.provider.DnsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs dns}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.provider.DnsProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

provider.NewDnsProvider(scope Construct, id *string, config DnsProviderConfig) DnsProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig">DnsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.provider.DnsProviderConfig">DnsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.provider.DnsProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-dns.provider.DnsProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-dns.provider.DnsProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-dns.provider.DnsProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-dns.provider.DnsProvider.resetUpdate"></a>

```go
func ResetUpdate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-dns.provider.DnsProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

provider.DnsProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.provider.DnsProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

provider.DnsProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

provider.DnsProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

provider.DnsProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.updateInput">UpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.update">Update</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-dns.provider.DnsProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.provider.DnsProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-dns.provider.DnsProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-dns.provider.DnsProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-dns.provider.DnsProvider.property.updateInput"></a>

```go
func UpdateInput() interface{}
```

- *Type:* interface{}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-dns.provider.DnsProvider.property.update"></a>

```go
func Update() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsProviderConfig <a name="DnsProviderConfig" id="@cdktn/provider-dns.provider.DnsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

&provider.DnsProviderConfig {
	Alias: *string,
	Update: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.update">Update</a></code> | <code>interface{}</code> | update block. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#alias DnsProvider#alias}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.update"></a>

```go
Update interface{}
```

- *Type:* interface{}

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#update DnsProvider#update}

---

### DnsProviderUpdate <a name="DnsProviderUpdate" id="@cdktn/provider-dns.provider.DnsProviderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

&provider.DnsProviderUpdate {
	Gssapi: interface{},
	KeyAlgorithm: *string,
	KeyName: *string,
	KeySecret: *string,
	Port: *f64,
	Retries: *f64,
	Server: *string,
	Timeout: *string,
	Transport: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi">Gssapi</a></code> | <code>interface{}</code> | gssapi block. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Required if `key_name` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName">KeyName</a></code> | <code>*string</code> | The name of the TSIG key used to sign the DNS update messages. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret">KeySecret</a></code> | <code>*string</code> | Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.port">Port</a></code> | <code>*f64</code> | The target UDP port on the server where updates are sent to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries">Retries</a></code> | <code>*f64</code> | How many times to retry on connection timeout. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.server">Server</a></code> | <code>*string</code> | The hostname or IP address of the DNS server to send updates to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout">Timeout</a></code> | <code>*string</code> | Timeout for DNS queries. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport">Transport</a></code> | <code>*string</code> | Transport to use for DNS queries. |

---

##### `Gssapi`<sup>Optional</sup> <a name="Gssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi"></a>

```go
Gssapi interface{}
```

- *Type:* interface{}

gssapi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#gssapi DnsProvider#gssapi}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Required if `key_name` is set.

When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`. Value can also be sourced from the DNS_UPDATE_KEYALGORITHM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#key_algorithm DnsProvider#key_algorithm}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

The name of the TSIG key used to sign the DNS update messages.

Value can also be sourced from the DNS_UPDATE_KEYNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#key_name DnsProvider#key_name}

---

##### `KeySecret`<sup>Optional</sup> <a name="KeySecret" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret"></a>

```go
KeySecret *string
```

- *Type:* *string

Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG.

Value can also be sourced from the DNS_UPDATE_KEYSECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#key_secret DnsProvider#key_secret}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The target UDP port on the server where updates are sent to.

Defaults to `53`. Value can also be sourced from the DNS_UPDATE_PORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#port DnsProvider#port}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

How many times to retry on connection timeout.

Defaults to `3`. Value can also be sourced from the DNS_UPDATE_RETRIES environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#retries DnsProvider#retries}

---

##### `Server`<sup>Optional</sup> <a name="Server" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.server"></a>

```go
Server *string
```

- *Type:* *string

The hostname or IP address of the DNS server to send updates to.

Value can also be sourced from the DNS_UPDATE_SERVER environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#server DnsProvider#server}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Timeout for DNS queries.

Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds. Value can also be sourced from the DNS_UPDATE_TIMEOUT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#timeout DnsProvider#timeout}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport"></a>

```go
Transport *string
```

- *Type:* *string

Transport to use for DNS queries.

Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`. Value can also be sourced from the DNS_UPDATE_TRANSPORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#transport DnsProvider#transport}

---

### DnsProviderUpdateGssapi <a name="DnsProviderUpdateGssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v9/provider"

&provider.DnsProviderUpdateGssapi {
	Keytab: *string,
	Password: *string,
	Realm: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab">Keytab</a></code> | <code>*string</code> | This or `password` is required if `username` is set, not supported on Windows. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password">Password</a></code> | <code>*string</code> | This or `keytab` is required if `username` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm">Realm</a></code> | <code>*string</code> | The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username">Username</a></code> | <code>*string</code> | The name of the user to authenticate as. |

---

##### `Keytab`<sup>Optional</sup> <a name="Keytab" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab"></a>

```go
Keytab *string
```

- *Type:* *string

This or `password` is required if `username` is set, not supported on Windows.

The path to a keytab file containing a key for `username`. Value can also be sourced from the DNS_UPDATE_KEYTAB environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#keytab DnsProvider#keytab}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password"></a>

```go
Password *string
```

- *Type:* *string

This or `keytab` is required if `username` is set.

The matching password for `username`. Value can also be sourced from the DNS_UPDATE_PASSWORD environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#password DnsProvider#password}

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm"></a>

```go
Realm *string
```

- *Type:* *string

The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#realm DnsProvider#realm}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username"></a>

```go
Username *string
```

- *Type:* *string

The name of the user to authenticate as.

If not set the current user session will be used. Value can also be sourced from the DNS_UPDATE_USERNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs#username DnsProvider#username}

---



