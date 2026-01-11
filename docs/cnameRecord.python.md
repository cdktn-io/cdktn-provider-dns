# `cnameRecord` Submodule <a name="`cnameRecord` Submodule" id="@cdktn/provider-dns.cnameRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CnameRecord <a name="CnameRecord" id="@cdktn/provider-dns.cnameRecord.CnameRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record dns_cname_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecord(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cname: str,
  name: str,
  zone: str,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.cname">cname</a></code> | <code>str</code> | The canonical name this record will point to. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the record. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.zone">zone</a></code> | <code>str</code> | DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.cname"></a>

- *Type:* str

The canonical name this record will point to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#cname CnameRecord#cname}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.name"></a>

- *Type:* str

The name of the record.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#name CnameRecord#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.zone"></a>

- *Type:* str

DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#zone CnameRecord#zone}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-dns.cnameRecord.CnameRecord.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#ttl CnameRecord#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-dns.cnameRecord.CnameRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-dns.cnameRecord.CnameRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.cnameRecord.CnameRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-dns.cnameRecord.CnameRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-dns.cnameRecord.CnameRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-dns.cnameRecord.CnameRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-dns.cnameRecord.CnameRecord.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-dns.cnameRecord.CnameRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-dns.cnameRecord.CnameRecord.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-dns.cnameRecord.CnameRecord.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.cnameRecord.CnameRecord.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.cnameRecord.CnameRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-dns.cnameRecord.CnameRecord.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CnameRecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isConstruct"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecord.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformElement"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformResource"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecord.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.cnameRecord.CnameRecord.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CnameRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CnameRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CnameRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.cnameRecord.CnameRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CnameRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.cnameInput">cname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `cname_input`<sup>Optional</sup> <a name="cname_input" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.cnameInput"></a>

```python
cname_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.cnameRecord.CnameRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CnameRecordConfig <a name="CnameRecordConfig" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.Initializer"></a>

```python
from cdktn_provider_dns import cname_record

cnameRecord.CnameRecordConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cname: str,
  name: str,
  zone: str,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.cname">cname</a></code> | <code>str</code> | The canonical name this record will point to. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.name">name</a></code> | <code>str</code> | The name of the record. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.zone">zone</a></code> | <code>str</code> | DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.cname"></a>

```python
cname: str
```

- *Type:* str

The canonical name this record will point to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#cname CnameRecord#cname}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the record.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#name CnameRecord#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

DNS zone the record belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#zone CnameRecord#zone}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-dns.cnameRecord.CnameRecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/cname_record#ttl CnameRecord#ttl}

---



