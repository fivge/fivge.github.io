#### 导入模块 import Module

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})
export class AppModule {}
```

服务模块 路由模块

特性模块 _feature modules_

#### 注入服务

构造函数只负责声明要注入的元素 `el`

```typescript
constructor(private http: HttpClient) { }
constructor(private el: ElementRef) { }
```

#### 提供服务

```typescript
// 特定模块
@NgModule({
  providers: [DocumentService],
})
export class DocumentModule {}

// 全局
@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor() {}
}
```

#### 声明组件、指令

```typescript
@NgModule({
  declarations: [NziDocumentCenterDirective, DockerComponent],
})
export class DocumentModule {}
```

#### 🎯 命名空间

#### Dom

当然，你可以通过标准的 JavaScript 方式手动给宿主 DOM 元素附加一个事件监听器。 但这种方法至少有三个问题：

1. 必须正确的书写事件监听器。
2. 当指令被销毁的时候，必须*拆卸*事件监听器，否则会导致内存泄露。
3. 必须直接和 DOM API 打交道，应该避免这样做。

#### 模板引用变量

*模板输入变量*是这样一种变量，你可以*在单个实例的模板中*引用它的值。 这个例子中有好几个模板输入变量：`hero`、`i` 和 `odd`。 它们都是用 `let` 作为前导关键字。

*模板输入变量*和[模板引用变量](https://angular.cn/guide/template-syntax#ref-vars)是**不同的**，无论是在*语义*上还是*语法*上。

你使用 `let` 关键字（如 `let hero`）在模板中声明一个模板*输入*变量。 这个变量的范围被限制在所重复模板的*单一实例*上。 事实上，你可以在其它结构型指令中使用同样的变量名。

而声明模板*引用*变量使用的是给变量名加 `#` 前缀的方式（`#var`）。 一个*引用*变量引用的是它所附着到的元素、组件或指令。它可以在*整个模板*的*任意位置*访问。

模板*输入*变量和*引用*变量具有各自独立的命名空间。`let hero` 中的 `hero` 和 `#hero` 中的 `hero` 并不是同一个变量。

#### ng-template ng-container

---

提供在同一个 module 的 sercice 共享同一作用域，不同 module 的提供不同作用域

默认 provider: root

---

## 依赖注入

### construct

在构造函数入参中注入，而不需要在构造函数中注入，angular 自动帮助完成这个操作 —— 在实例化 component 时候，注入服务

这样也不需要实例化函数

### provider

在 provider 中，提供这个服务

通常在 module 中，也可在 component 中，或者 service 中（一般不会这样做的）

### 多级注入

服务中注入服务再注入服务
