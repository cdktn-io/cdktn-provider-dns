# `dataDnsNsRecordSet` Submodule <a name="`dataDnsNsRecordSet` Submodule" id="@cdktn/provider-dns.dataDnsNsRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsNsRecordSet <a name="DataDnsNsRecordSet" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/ns_record_set dns_ns_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

datadnsnsrecordset.NewDataDnsNsRecordSet(scope Construct, id *string, config DataDnsNsRecordSetConfig) DataDnsNsRecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig">DataDnsNsRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig">DataDnsNsRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDnsNsRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

datadnsnsrecordset.DataDnsNsRecordSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

datadnsnsrecordset.DataDnsNsRecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

datadnsnsrecordset.DataDnsNsRecordSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

datadnsnsrecordset.DataDnsNsRecordSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDnsNsRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDnsNsRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDnsNsRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/ns_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDnsNsRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.host">Host</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.nameservers"></a>

```go
func Nameservers() *[]*string
```

- *Type:* *[]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsNsRecordSetConfig <a name="DataDnsNsRecordSetConfig" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/datadnsnsrecordset"

&datadnsnsrecordset.DataDnsNsRecordSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Host: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.host">Host</a></code> | <code>*string</code> | Host to look up. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-dns.dataDnsNsRecordSet.DataDnsNsRecordSetConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Host to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/data-sources/ns_record_set#host DataDnsNsRecordSet#host}

---



