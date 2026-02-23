# `dataDnsARecordSet` Submodule <a name="`dataDnsARecordSet` Submodule" id="@cdktn/provider-dns.dataDnsARecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsARecordSet <a name="DataDnsARecordSet" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/a_record_set dns_a_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

new dataDnsARecordSet.DataDnsARecordSet(scope: Construct, id: string, config: DataDnsARecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig">DataDnsARecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig">DataDnsARecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDnsARecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isConstruct"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

dataDnsARecordSet.DataDnsARecordSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformElement"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

dataDnsARecordSet.DataDnsARecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformDataSource"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

dataDnsARecordSet.DataDnsARecordSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDnsARecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDnsARecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDnsARecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/a_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDnsARecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.addrs">addrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.host">host</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addrs`<sup>Required</sup> <a name="addrs" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.addrs"></a>

```typescript
public readonly addrs: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsARecordSetConfig <a name="DataDnsARecordSetConfig" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.Initializer"></a>

```typescript
import { dataDnsARecordSet } from '@cdktn/provider-dns'

const dataDnsARecordSetConfig: dataDnsARecordSet.DataDnsARecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.host">host</a></code> | <code>string</code> | Host to look up. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-dns.dataDnsARecordSet.DataDnsARecordSetConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/a_record_set#host DataDnsARecordSet#host}

---



