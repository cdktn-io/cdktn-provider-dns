# `txtRecordSet` Submodule <a name="`txtRecordSet` Submodule" id="@cdktn/provider-dns.txtRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TxtRecordSet <a name="TxtRecordSet" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set dns_txt_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

txtrecordset.NewTxtRecordSet(scope Construct, id *string, config TxtRecordSetConfig) TxtRecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig">TxtRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig">TxtRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetName"></a>

```go
func ResetName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TxtRecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

txtrecordset.TxtRecordSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

txtrecordset.TxtRecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

txtrecordset.TxtRecordSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

txtrecordset.TxtRecordSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TxtRecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TxtRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TxtRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TxtRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.txtInput">TxtInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.txt">Txt</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TxtInput`<sup>Optional</sup> <a name="TxtInput" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.txtInput"></a>

```go
func TxtInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Txt`<sup>Required</sup> <a name="Txt" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.txt"></a>

```go
func Txt() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TxtRecordSetConfig <a name="TxtRecordSetConfig" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-dns-go/dns/v11/txtrecordset"

&txtrecordset.TxtRecordSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Txt: *[]*string,
	Zone: *string,
	Name: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.txt">Txt</a></code> | <code>*[]*string</code> | The text records this record set will be set to. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.zone">Zone</a></code> | <code>*string</code> | DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the record set. |
| <code><a href="#@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Txt`<sup>Required</sup> <a name="Txt" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.txt"></a>

```go
Txt *[]*string
```

- *Type:* *[]*string

The text records this record set will be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set#txt TxtRecordSet#txt}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set#zone TxtRecordSet#zone}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the record set.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set#name TxtRecordSet#name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-dns.txtRecordSet.TxtRecordSetConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/txt_record_set#ttl TxtRecordSet#ttl}

---



