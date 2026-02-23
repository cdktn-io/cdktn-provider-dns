# `dataDnsSrvRecordSet` Submodule <a name="`dataDnsSrvRecordSet` Submodule" id="@cdktn/provider-dns.dataDnsSrvRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsSrvRecordSet <a name="DataDnsSrvRecordSet" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/srv_record_set dns_srv_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.NewDataDnsSrvRecordSet(scope Construct, id *string, config DataDnsSrvRecordSetConfig) DataDnsSrvRecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig">DataDnsSrvRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig">DataDnsSrvRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDnsSrvRecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.DataDnsSrvRecordSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.DataDnsSrvRecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.DataDnsSrvRecordSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.DataDnsSrvRecordSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDnsSrvRecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDnsSrvRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDnsSrvRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/srv_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDnsSrvRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv">Srv</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Srv`<sup>Required</sup> <a name="Srv" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.srv"></a>

```go
func Srv() DataDnsSrvRecordSetSrvList
```

- *Type:* <a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList">DataDnsSrvRecordSetSrvList</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsSrvRecordSetConfig <a name="DataDnsSrvRecordSetConfig" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

&datadnssrvrecordset.DataDnsSrvRecordSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service">Service</a></code> | <code>*string</code> | Service to look up. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/srv_record_set#service DataDnsSrvRecordSet#service}

---

### DataDnsSrvRecordSetSrv <a name="DataDnsSrvRecordSetSrv" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

&datadnssrvrecordset.DataDnsSrvRecordSetSrv {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsSrvRecordSetSrvList <a name="DataDnsSrvRecordSetSrvList" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.NewDataDnsSrvRecordSetSrvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDnsSrvRecordSetSrvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get"></a>

```go
func Get(index *f64) DataDnsSrvRecordSetSrvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDnsSrvRecordSetSrvOutputReference <a name="DataDnsSrvRecordSetSrvOutputReference" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/datadnssrvrecordset"

datadnssrvrecordset.NewDataDnsSrvRecordSetSrvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDnsSrvRecordSetSrvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrvOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDnsSrvRecordSetSrv
```

- *Type:* <a href="#@cdktn/provider-dns.dataDnsSrvRecordSet.DataDnsSrvRecordSetSrv">DataDnsSrvRecordSetSrv</a>

---



