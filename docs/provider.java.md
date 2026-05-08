# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-dns.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsProvider <a name="DnsProvider" id="@cdktn/provider-dns.provider.DnsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs dns}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.provider.DnsProvider.Initializer"></a>

```java
import io.cdktn.providers.dns.provider.DnsProvider;

DnsProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .update(IResolvable|java.util.List<DnsProviderUpdate>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.update">update</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>></code> | update block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#alias DnsProvider#alias}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-dns.provider.DnsProvider.Initializer.parameter.update"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>>

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#update DnsProvider#update}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.provider.DnsProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-dns.provider.DnsProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-dns.provider.DnsProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-dns.provider.DnsProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.provider.DnsProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-dns.provider.DnsProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-dns.provider.DnsProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-dns.provider.DnsProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-dns.provider.DnsProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-dns.provider.DnsProvider.resetUpdate"></a>

```java
public void resetUpdate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DnsProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-dns.provider.DnsProvider.isConstruct"></a>

```java
import io.cdktn.providers.dns.provider.DnsProvider;

DnsProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.dns.provider.DnsProvider;

DnsProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider"></a>

```java
import io.cdktn.providers.dns.provider.DnsProvider;

DnsProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.provider.DnsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.dns.provider.DnsProvider;

DnsProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DnsProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DnsProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DnsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DnsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.provider.DnsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DnsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.updateInput">updateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.update">update</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.provider.DnsProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-dns.provider.DnsProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.provider.DnsProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-dns.provider.DnsProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-dns.provider.DnsProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-dns.provider.DnsProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-dns.provider.DnsProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-dns.provider.DnsProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-dns.provider.DnsProvider.property.updateInput"></a>

```java
public IResolvable|java.util.List<DnsProviderUpdate> getUpdateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>>

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-dns.provider.DnsProvider.property.update"></a>

```java
public IResolvable|java.util.List<DnsProviderUpdate> getUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.provider.DnsProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DnsProviderConfig <a name="DnsProviderConfig" id="@cdktn/provider-dns.provider.DnsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.dns.provider.DnsProviderConfig;

DnsProviderConfig.builder()
//  .alias(java.lang.String)
//  .update(IResolvable|java.util.List<DnsProviderUpdate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderConfig.property.update">update</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>></code> | update block. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#alias DnsProvider#alias}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-dns.provider.DnsProviderConfig.property.update"></a>

```java
public IResolvable|java.util.List<DnsProviderUpdate> getUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdate">DnsProviderUpdate</a>>

update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#update DnsProvider#update}

---

### DnsProviderUpdate <a name="DnsProviderUpdate" id="@cdktn/provider-dns.provider.DnsProviderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdate.Initializer"></a>

```java
import io.cdktn.providers.dns.provider.DnsProviderUpdate;

DnsProviderUpdate.builder()
//  .gssapi(IResolvable|java.util.List<DnsProviderUpdateGssapi>)
//  .keyAlgorithm(java.lang.String)
//  .keyName(java.lang.String)
//  .keySecret(java.lang.String)
//  .port(java.lang.Number)
//  .recursive(java.lang.Boolean|IResolvable)
//  .retries(java.lang.Number)
//  .server(java.lang.String)
//  .timeout(java.lang.String)
//  .transport(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi">gssapi</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a>></code> | gssapi block. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | Required if `key_name` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The name of the TSIG key used to sign the DNS update messages. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret">keySecret</a></code> | <code>java.lang.String</code> | Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.port">port</a></code> | <code>java.lang.Number</code> | The target UDP port on the server where updates are sent to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable the Recursion Desired (RD) flag on DNS queries. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries">retries</a></code> | <code>java.lang.Number</code> | How many times to retry on connection timeout. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.server">server</a></code> | <code>java.lang.String</code> | The hostname or IP address of the DNS server to send updates to. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Timeout for DNS queries. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport">transport</a></code> | <code>java.lang.String</code> | Transport to use for DNS queries. |

---

##### `gssapi`<sup>Optional</sup> <a name="gssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.gssapi"></a>

```java
public IResolvable|java.util.List<DnsProviderUpdateGssapi> getGssapi();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi">DnsProviderUpdateGssapi</a>>

gssapi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#gssapi DnsProvider#gssapi}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

Required if `key_name` is set.

When using TSIG authentication, the algorithm to use for HMAC. Valid values are `hmac-md5`, `hmac-sha1`, `hmac-sha256` or `hmac-sha512`. Value can also be sourced from the DNS_UPDATE_KEYALGORITHM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_algorithm DnsProvider#key_algorithm}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The name of the TSIG key used to sign the DNS update messages.

Value can also be sourced from the DNS_UPDATE_KEYNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_name DnsProvider#key_name}

---

##### `keySecret`<sup>Optional</sup> <a name="keySecret" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.keySecret"></a>

```java
public java.lang.String getKeySecret();
```

- *Type:* java.lang.String

Required if `key_name` is set A Base64-encoded string containing the shared secret to be used for TSIG.

Value can also be sourced from the DNS_UPDATE_KEYSECRET environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#key_secret DnsProvider#key_secret}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The target UDP port on the server where updates are sent to.

Defaults to `53`. Value can also be sourced from the DNS_UPDATE_PORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#port DnsProvider#port}

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.recursive"></a>

```java
public java.lang.Boolean|IResolvable getRecursive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable the Recursion Desired (RD) flag on DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#recursive DnsProvider#recursive}

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.retries"></a>

```java
public java.lang.Number getRetries();
```

- *Type:* java.lang.Number

How many times to retry on connection timeout.

Defaults to `3`. Value can also be sourced from the DNS_UPDATE_RETRIES environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#retries DnsProvider#retries}

---

##### `server`<sup>Optional</sup> <a name="server" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

The hostname or IP address of the DNS server to send updates to.

Value can also be sourced from the DNS_UPDATE_SERVER environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#server DnsProvider#server}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Timeout for DNS queries.

Valid values are durations expressed as `500ms`, etc. or a plain number which is treated as whole seconds. Value can also be sourced from the DNS_UPDATE_TIMEOUT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#timeout DnsProvider#timeout}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktn/provider-dns.provider.DnsProviderUpdate.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

Transport to use for DNS queries.

Valid values are `udp`, `udp4`, `udp6`, `tcp`, `tcp4`, or `tcp6`. Any UDP transport will retry automatically with the equivalent TCP transport in the event of a truncated response. Defaults to `udp`. Value can also be sourced from the DNS_UPDATE_TRANSPORT environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#transport DnsProvider#transport}

---

### DnsProviderUpdateGssapi <a name="DnsProviderUpdateGssapi" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.Initializer"></a>

```java
import io.cdktn.providers.dns.provider.DnsProviderUpdateGssapi;

DnsProviderUpdateGssapi.builder()
//  .keytab(java.lang.String)
//  .password(java.lang.String)
//  .realm(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab">keytab</a></code> | <code>java.lang.String</code> | This or `password` is required if `username` is set, not supported on Windows. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password">password</a></code> | <code>java.lang.String</code> | This or `keytab` is required if `username` is set. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm">realm</a></code> | <code>java.lang.String</code> | The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable. |
| <code><a href="#@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username">username</a></code> | <code>java.lang.String</code> | The name of the user to authenticate as. |

---

##### `keytab`<sup>Optional</sup> <a name="keytab" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.keytab"></a>

```java
public java.lang.String getKeytab();
```

- *Type:* java.lang.String

This or `password` is required if `username` is set, not supported on Windows.

The path to a keytab file containing a key for `username`. Value can also be sourced from the DNS_UPDATE_KEYTAB environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#keytab DnsProvider#keytab}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

This or `keytab` is required if `username` is set.

The matching password for `username`. Value can also be sourced from the DNS_UPDATE_PASSWORD environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#password DnsProvider#password}

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

The Kerberos realm or Active Directory domain. Value can also be sourced from the DNS_UPDATE_REALM environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#realm DnsProvider#realm}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-dns.provider.DnsProviderUpdateGssapi.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The name of the user to authenticate as.

If not set the current user session will be used. Value can also be sourced from the DNS_UPDATE_USERNAME environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs#username DnsProvider#username}

---



