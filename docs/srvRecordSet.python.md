# `srvRecordSet` Submodule <a name="`srvRecordSet` Submodule" id="@cdktn/provider-dns.srvRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SrvRecordSet <a name="SrvRecordSet" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set dns_srv_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  zone: str,
  srv: IResolvable | typing.List[SrvRecordSetSrv] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the record set. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.zone">zone</a></code> | <code>str</code> | DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.srv">srv</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]</code> | srv block. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.name"></a>

- *Type:* str

The name of the record set.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#name SrvRecordSet#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.zone"></a>

- *Type:* str

DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#zone SrvRecordSet#zone}

---

##### `srv`<sup>Optional</sup> <a name="srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.srv"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]

srv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#srv SrvRecordSet#srv}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#ttl SrvRecordSet#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv">put_srv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetSrv">reset_srv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_srv` <a name="put_srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv"></a>

```python
def put_srv(
  value: IResolvable | typing.List[SrvRecordSetSrv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]

---

##### `reset_srv` <a name="reset_srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetSrv"></a>

```python
def reset_srv() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SrvRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isConstruct"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SrvRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SrvRecordSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SrvRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SrvRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srv">srv</a></code> | <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList">SrvRecordSetSrvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srvInput">srv_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `srv`<sup>Required</sup> <a name="srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srv"></a>

```python
srv: SrvRecordSetSrvList
```

- *Type:* <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList">SrvRecordSetSrvList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `srv_input`<sup>Optional</sup> <a name="srv_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srvInput"></a>

```python
srv_input: IResolvable | typing.List[SrvRecordSetSrv]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SrvRecordSetConfig <a name="SrvRecordSetConfig" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.Initializer"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  zone: str,
  srv: IResolvable | typing.List[SrvRecordSetSrv] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.name">name</a></code> | <code>str</code> | The name of the record set. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.zone">zone</a></code> | <code>str</code> | DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.srv">srv</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]</code> | srv block. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the record set.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#name SrvRecordSet#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#zone SrvRecordSet#zone}

---

##### `srv`<sup>Optional</sup> <a name="srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.srv"></a>

```python
srv: IResolvable | typing.List[SrvRecordSetSrv]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]

srv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#srv SrvRecordSet#srv}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#ttl SrvRecordSet#ttl}

---

### SrvRecordSetSrv <a name="SrvRecordSetSrv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.Initializer"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSetSrv(
  port: typing.Union[int, float],
  priority: typing.Union[int, float],
  target: str,
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port for the service on the target. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority for the record. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.target">target</a></code> | <code>str</code> | The FQDN of the target, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | The weight for the record. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port for the service on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#port SrvRecordSet#port}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority for the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#priority SrvRecordSet#priority}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.target"></a>

```python
target: str
```

- *Type:* str

The FQDN of the target, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#target SrvRecordSet#target}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The weight for the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/resources/srv_record_set#weight SrvRecordSet#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### SrvRecordSetSrvList <a name="SrvRecordSetSrvList" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSetSrvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SrvRecordSetSrvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SrvRecordSetSrv]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>]

---


### SrvRecordSetSrvOutputReference <a name="SrvRecordSetSrvOutputReference" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer"></a>

```python
from cdktn_provider_dns import srv_record_set

srvRecordSet.SrvRecordSetSrvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SrvRecordSetSrv
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>

---



