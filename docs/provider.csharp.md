# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-dns.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsProvider <a name="DnsProvider" id="@cdktn/provider-dns.provider.DnsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs dns}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.provider.DnsProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Dns;

new DnsProvider(Construct Scope, string Id, DnsProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig">DnsProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.provider.DnsProviderConfig">DnsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.with">With</a></code> | Applies one or more mixins to this construct. |
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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-dns.provider.DnsProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-dns.provider.DnsProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-dns.provider.DnsProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-dns.provider.DnsProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-dns.provider.DnsProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-dns.provider.DnsProvider.resetUpdate"></a>

```csharp
private void ResetUpdate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DnsProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-dns.provider.DnsProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Dns;

DnsProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-dns.provider.DnsProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Dns;

DnsProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Dns;

DnsProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Dns;

DnsProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DnsProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DnsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.updateInput">UpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.update">Update</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-dns.provider.DnsProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.provider.DnsProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-dns.provider.DnsProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-dns.provider.DnsProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-dns.provider.DnsProvider.property.updateInput"></a>

```csharp
public IResolvable|DnsProviderUpdate[] UpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-dns.provider.DnsProvider.property.update"></a>

```csharp
public IResolvable|DnsProviderUpdate[] Update { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsProviderConfig <a name="DnsProviderConfig" id="@cdktn/provider-dns.provider.DnsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Dns;

new DnsProviderConfig {
    string Alias = null,
    IResolvable|DnsProviderUpdate[] Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.update">Update</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]</code> | update block. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#alias DnsProvider#alias}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.update"></a>

```csharp
public IResolvable|DnsProviderUpdate[] Update { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>[]

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#update DnsProvider#update}

---

### DnsProviderUpdate <a name="DnsProviderUpdate" id="@cdktn/provider-dns.provider.DnsProviderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Dns;

new DnsProviderUpdate {
    IResolvable|DnsProviderUpdateGssapi[] Gssapi = null,
    string KeyAlgorithm = null,
    string KeyName = null,
    string KeySecret = null,
    double Port = null,
    bool|IResolvable Recursive = null,
    double Retries = null,
    string Server = null,
    string Timeout = null,
    string Transport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi">Gssapi</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a>[]</code> | gssapi block. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Required if `key_name` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName">KeyName</a></code> | <code>string</code> | The name of the TSIG key used to sign the DNS update messages. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret">KeySecret</a></code> | <code>string</code> | Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.port">Port</a></code> | <code>double</code> | The target UDP port on the server where updates are sent to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.recursive">Recursive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable the Recursion Desired (RD) flag on DNS queries. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries">Retries</a></code> | <code>double</code> | How many times to retry on connection timeout. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.server">Server</a></code> | <code>string</code> | The hostname or IP address of the DNS server to send updates to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout">Timeout</a></code> | <code>string</code> | Timeout for DNS queries. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport">Transport</a></code> | <code>string</code> | Transport to use for DNS queries. |

---

##### `Gssapi`<sup>Optional</sup> <a name="Gssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi"></a>

```csharp
public IResolvable|DnsProviderUpdateGssapi[] Gssapi { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a>[]

gssapi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#gssapi DnsProvider#gssapi}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Required if `key_name` is set.

When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`. Value can also be sourced from the DNS_UPDATE_KEYALGORITHM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#key_algorithm DnsProvider#key_algorithm}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The name of the TSIG key used to sign the DNS update messages.

Value can also be sourced from the DNS_UPDATE_KEYNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#key_name DnsProvider#key_name}

---

##### `KeySecret`<sup>Optional</sup> <a name="KeySecret" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret"></a>

```csharp
public string KeySecret { get; set; }
```

- *Type:* string

Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG.

Value can also be sourced from the DNS_UPDATE_KEYSECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#key_secret DnsProvider#key_secret}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The target UDP port on the server where updates are sent to.

Defaults to `53`. Value can also be sourced from the DNS_UPDATE_PORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#port DnsProvider#port}

---

##### `Recursive`<sup>Optional</sup> <a name="Recursive" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.recursive"></a>

```csharp
public bool|IResolvable Recursive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable the Recursion Desired (RD) flag on DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#recursive DnsProvider#recursive}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

How many times to retry on connection timeout.

Defaults to `3`. Value can also be sourced from the DNS_UPDATE_RETRIES environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#retries DnsProvider#retries}

---

##### `Server`<sup>Optional</sup> <a name="Server" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

The hostname or IP address of the DNS server to send updates to.

Value can also be sourced from the DNS_UPDATE_SERVER environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#server DnsProvider#server}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Timeout for DNS queries.

Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds. Value can also be sourced from the DNS_UPDATE_TIMEOUT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#timeout DnsProvider#timeout}

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport"></a>

```csharp
public string Transport { get; set; }
```

- *Type:* string

Transport to use for DNS queries.

Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`. Value can also be sourced from the DNS_UPDATE_TRANSPORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#transport DnsProvider#transport}

---

### DnsProviderUpdateGssapi <a name="DnsProviderUpdateGssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Dns;

new DnsProviderUpdateGssapi {
    string Keytab = null,
    string Password = null,
    string Realm = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab">Keytab</a></code> | <code>string</code> | This or `password` is required if `username` is set, not supported on Windows. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password">Password</a></code> | <code>string</code> | This or `keytab` is required if `username` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm">Realm</a></code> | <code>string</code> | The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username">Username</a></code> | <code>string</code> | The name of the user to authenticate as. |

---

##### `Keytab`<sup>Optional</sup> <a name="Keytab" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab"></a>

```csharp
public string Keytab { get; set; }
```

- *Type:* string

This or `password` is required if `username` is set, not supported on Windows.

The path to a keytab file containing a key for `username`. Value can also be sourced from the DNS_UPDATE_KEYTAB environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#keytab DnsProvider#keytab}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

This or `keytab` is required if `username` is set.

The matching password for `username`. Value can also be sourced from the DNS_UPDATE_PASSWORD environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#password DnsProvider#password}

---

##### `Realm`<sup>Optional</sup> <a name="Realm" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#realm DnsProvider#realm}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The name of the user to authenticate as.

If not set the current user session will be used. Value can also be sourced from the DNS_UPDATE_USERNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.6.1/docs#username DnsProvider#username}

---



