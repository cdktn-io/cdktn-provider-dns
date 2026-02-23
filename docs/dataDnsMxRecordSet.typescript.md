# `dataDnsMxRecordSet` Submodule <a name="`dataDnsMxRecordSet` Submodule" id="@cdktn/provider-dns.dataDnsMxRecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDnsMxRecordSet <a name="DataDnsMxRecordSet" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/mx_record_set dns_mx_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

new dataDnsMxRecordSet.DataDnsMxRecordSet(scope: Construct, id: string, config: DataDnsMxRecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig">DataDnsMxRecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig">DataDnsMxRecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDnsMxRecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isConstruct"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

dataDnsMxRecordSet.DataDnsMxRecordSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformElement"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformDataSource"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDnsMxRecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDnsMxRecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDnsMxRecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/mx_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDnsMxRecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.mx">mx</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList">DataDnsMxRecordSetMxList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.domain">domain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mx`<sup>Required</sup> <a name="mx" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.mx"></a>

```typescript
public readonly mx: DataDnsMxRecordSetMxList;
```

- *Type:* <a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList">DataDnsMxRecordSetMxList</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDnsMxRecordSetConfig <a name="DataDnsMxRecordSetConfig" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.Initializer"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

const dataDnsMxRecordSetConfig: dataDnsMxRecordSet.DataDnsMxRecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.domain">domain</a></code> | <code>string</code> | Domain to look up. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain to look up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/dns/3.5.0/docs/data-sources/mx_record_set#domain DataDnsMxRecordSet#domain}

---

### DataDnsMxRecordSetMx <a name="DataDnsMxRecordSetMx" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMx"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMx.Initializer"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

const dataDnsMxRecordSetMx: dataDnsMxRecordSet.DataDnsMxRecordSetMx = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDnsMxRecordSetMxList <a name="DataDnsMxRecordSetMxList" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

new dataDnsMxRecordSet.DataDnsMxRecordSetMxList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.get"></a>

```typescript
public get(index: number): DataDnsMxRecordSetMxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDnsMxRecordSetMxOutputReference <a name="DataDnsMxRecordSetMxOutputReference" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer"></a>

```typescript
import { dataDnsMxRecordSet } from '@cdktn/provider-dns'

new dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.exchange">exchange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.preference">preference</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMx">DataDnsMxRecordSetMx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exchange`<sup>Required</sup> <a name="exchange" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.exchange"></a>

```typescript
public readonly exchange: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.preference"></a>

```typescript
public readonly preference: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMxOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDnsMxRecordSetMx;
```

- *Type:* <a href="#@cdktn/provider-dns.dataDnsMxRecordSet.DataDnsMxRecordSetMx">DataDnsMxRecordSetMx</a>

---



