# `srvRecordSet` Submodule <a name="`srvRecordSet` Submodule" id="@cdktn/provider-dns.srvRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SrvRecordSet <a name="SrvRecordSet" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set dns_srv_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

new srvRecordSet.SrvRecordSet(scope: Construct, id: string, config: SrvRecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig">SrvRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig">SrvRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv">putSrv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetSrv">resetSrv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSrv` <a name="putSrv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv"></a>

```typescript
public putSrv(value: IResolvable | SrvRecordSetSrv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.putSrv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]

---

##### `resetSrv` <a name="resetSrv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetSrv"></a>

```typescript
public resetSrv(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SrvRecordSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isConstruct"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

srvRecordSet.SrvRecordSet.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

srvRecordSet.SrvRecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

srvRecordSet.SrvRecordSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

srvRecordSet.SrvRecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SrvRecordSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SrvRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SrvRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SrvRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srv">srv</a></code> | <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList">SrvRecordSetSrvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srvInput">srvInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `srv`<sup>Required</sup> <a name="srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srv"></a>

```typescript
public readonly srv: SrvRecordSetSrvList;
```

- *Type:* <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList">SrvRecordSetSrvList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `srvInput`<sup>Optional</sup> <a name="srvInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.srvInput"></a>

```typescript
public readonly srvInput: IResolvable | SrvRecordSetSrv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SrvRecordSetConfig <a name="SrvRecordSetConfig" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.Initializer"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

const srvRecordSetConfig: srvRecordSet.SrvRecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.name">name</a></code> | <code>string</code> | The name of the record set. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.zone">zone</a></code> | <code>string</code> | DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.srv">srv</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]</code> | srv block. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.ttl">ttl</a></code> | <code>number</code> | The TTL of the record set. Defaults to `3600`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the record set.

The `zone` argument will be appended to this value to create the full record path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#name SrvRecordSet#name}

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

DNS zone the record set belongs to. It must be an FQDN, that is, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#zone SrvRecordSet#zone}

---

##### `srv`<sup>Optional</sup> <a name="srv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.srv"></a>

```typescript
public readonly srv: IResolvable | SrvRecordSetSrv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]

srv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#srv SrvRecordSet#srv}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL of the record set. Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#ttl SrvRecordSet#ttl}

---

### SrvRecordSetSrv <a name="SrvRecordSetSrv" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.Initializer"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

const srvRecordSetSrv: srvRecordSet.SrvRecordSetSrv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.port">port</a></code> | <code>number</code> | The port for the service on the target. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.priority">priority</a></code> | <code>number</code> | The priority for the record. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.target">target</a></code> | <code>string</code> | The FQDN of the target, include the trailing dot. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.weight">weight</a></code> | <code>number</code> | The weight for the record. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port for the service on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#port SrvRecordSet#port}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority for the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#priority SrvRecordSet#priority}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The FQDN of the target, include the trailing dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#target SrvRecordSet#target}

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight for the record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.4.3/docs/resources/srv_record_set#weight SrvRecordSet#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### SrvRecordSetSrvList <a name="SrvRecordSetSrvList" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

new srvRecordSet.SrvRecordSetSrvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get"></a>

```typescript
public get(index: number): SrvRecordSetSrvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SrvRecordSetSrv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>[]

---


### SrvRecordSetSrvOutputReference <a name="SrvRecordSetSrvOutputReference" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer"></a>

```typescript
import { srvRecordSet } from '@cdktn/provider-dns'

new srvRecordSet.SrvRecordSetSrvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SrvRecordSetSrv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-dns.srvRecordSet.SrvRecordSetSrv">SrvRecordSetSrv</a>

---



