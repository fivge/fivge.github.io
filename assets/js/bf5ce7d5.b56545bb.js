"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},E=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),E=i(t),d=r,u=E["".concat(c,".").concat(d)]||E[d]||m[d]||l;return t?a.createElement(u,o(o({ref:n},p),{},{components:t})):a.createElement(u,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=E;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},4511:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),o=["components"],s={},c=void 0,i={unversionedId:"BE/Java/SQL/basic",id:"BE/Java/SQL/basic",title:"basic",description:"database",source:"@site/docs/BE/Java/SQL/basic.md",sourceDirName:"BE/Java/SQL",slug:"/BE/Java/SQL/basic",permalink:"/docs/BE/Java/SQL/basic",draft:!1,tags:[],version:"current",lastUpdatedAt:1685726734,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BE",permalink:"/docs/BE/"},next:{title:"basic",permalink:"/docs/BE/Java/basic"}},p={},m=[{value:"database",id:"database",level:4},{value:"table",id:"table",level:4},{value:"<code>SELECT</code>",id:"select",level:5},{value:"<code>INSERT</code>",id:"insert",level:5},{value:"<code>UPDATE</code>",id:"update",level:5},{value:"<code>IN</code> <code>NOT</code>",id:"in-not",level:5},{value:"<code>between and</code>\u2026",id:"between-and",level:5},{value:"<code>GROUP BY</code> <code>ORDER BY</code>",id:"group-by-order-by",level:5},{value:"<code>function()</code>",id:"function",level:5},{value:"<code>DELETE</code>",id:"delete",level:5},{value:"<code>JOIN</code>",id:"join",level:5},{value:"tmp",id:"tmp",level:3}],E={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"database"},"database"),(0,l.kt)("h4",{id:"table"},"table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"Truncate table Person\n")),(0,l.kt)("h5",{id:"select"},(0,l.kt)("inlineCode",{parentName:"h5"},"SELECT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- OR\nSELECT name, population, area FROM world\nWHERE area > 3000000 OR population > 25000000;\n\n-- UNION\nSELECT name, population, area FROM world\nWHERE area > 3000000\nUNION\nSELECT name, population, area FROM world\nWHERE population > 25000000;\n\n-- AND\nSELECT * FROM cinema\nWHERE id % 2 = 1 AND description != 'boring'\nORDER BY rating DESC;\n\n-- <https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database%20%E9%A2%98%E8%A7%A3.md#178-rank-scores>\nSELECT a.Score AS score,\n    (SELECT count(DISTINCT b.Score)\n        FROM Scores b\n        WHERE b.Score >= a.Score\n    ) AS rank\nFROM Scores a\nORDER BY Score DESC;\n-- INNER JOIN\nSELECT\n    S1.score 'Score',\n    COUNT( DISTINCT S2.score ) 'Rank'\nFROM\n    Scores S1\n    INNER JOIN Scores S2\n    ON S1.score <= S2.score\nGROUP BY\n    S1.id, S1.score\nORDER BY\n    S1.score DESC;\n")),(0,l.kt)("h5",{id:"insert"},(0,l.kt)("inlineCode",{parentName:"h5"},"INSERT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"")),(0,l.kt)("h5",{id:"update"},(0,l.kt)("inlineCode",{parentName:"h5"},"UPDATE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- CASE WHEN\nUPDATE salary\nSET\n    sex = CASE sex\n        WHEN 'm' THEN 'f'\n        WHEN 'f' THEN 'm'\n        ELSE 'x'\n    END;\n\n-- IF\nUPDATE salary\nSET\n    sex = IF(sex = 'm', 'f', 'm');\n\n-- char\nUPDATE salary\nSET\n    sex = char(ascii('m') + ascii('f') - ascii(sex));\n")),(0,l.kt)("h5",{id:"in-not"},(0,l.kt)("inlineCode",{parentName:"h5"},"IN")," ",(0,l.kt)("inlineCode",{parentName:"h5"},"NOT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- IN\n\n-- <https://leetcode-cn.com/problems/department-highest-salary/>\nSELECT\n    d.Name Department,\n    e.Name Employee,\n    e.Salary Salary\nFROM\n    Employee e\n    JOIN Department d ON e.DepartmentId = d.Id\nWHERE\n    (e.Salary, e.DepartmentId) IN (\n        SELECT\n            Max(Salary),\n            DepartmentId\n        FROM\n            Employee\n        GROUP BY\n            DepartmentId\n    );\n")),(0,l.kt)("h5",{id:"between-and"},(0,l.kt)("inlineCode",{parentName:"h5"},"between and"),"\u2026"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"select * from product where date(add_time) between '2013-01-01' and '2013-01-31'\n")),(0,l.kt)("h5",{id:"group-by-order-by"},(0,l.kt)("inlineCode",{parentName:"h5"},"GROUP BY")," ",(0,l.kt)("inlineCode",{parentName:"h5"},"ORDER BY")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- https://leetcode-cn.com/problems/classes-more-than-5-students/comments/\n\n#\u6700\u6734\u5b9e\u7684\u5199\u6cd5\uff0c\u5171\u4e09\u5c42\u67e5\u8be2\uff0c\u5148\u5229\u7528 DISTINCT \u53bb\u6389\u91cd\u590d\u8bb0\u5f55\u5f97\u5230\u8868 A\uff0c\u518d\u5229\u7528 GROUP BY \u4e3a CLASS \u5206\u7ec4\uff0c\u7136\n#\u540e\u7528 COUNT() \u7edf\u8ba1\u6bcf\u7ec4\u4e2a\u6570\u5f97\u5230\u8868 B\uff0c\u6700\u540e\u5728\u6700\u5916\u5c42\u9650\u5b9a\u6570\u91cf >=5 \u67e5\u5230\u7ed3\u679c\nSELECT b.class FROM\n    ( SELECT a.class, count(a.class) c FROM\n            ( SELECT DISTINCT * FROM courses ) a\n        GROUP BY a.class\n    ) b\nWHERE b.c >= 5;\n\n# HAVING\nSELECT b.class, count(b.class) FROM\n    ( SELECT DISTINCT a.student, a.class FROM courses a ) b\nGROUP BY b.class\nHAVING count(b.class) >= 5;\n\n# \u5bf9 class \u5217\u8fdb\u884c\u5206\u7ec4\u4e4b\u540e\uff0c\u518d\u4f7f\u7528 count \u6c47\u603b\u51fd\u6570\u7edf\u8ba1\u6570\u91cf\uff0c\u7edf\u8ba1\u4e4b\u540e\u4f7f\u7528 having \u8fdb\u884c\u8fc7\u6ee4\nSELECT class FROM courses\nGROUP BY class\nHAVING count( DISTINCT student ) >= 5;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"# GROUP BY \u81ea\u52a8\u6309\u5206\u7ec4\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\uff0cORDER BY \u4e5f\u53ef\u4ee5\u6309\u6c47\u603b\u5b57\u6bb5\u6765\u8fdb\u884c\u6392\u5e8f\u3002\nSELECT col, COUNT(*) AS num\nFROM mytable\nGROUP BY col\nORDER BY num;\n\n# WHERE \u8fc7\u6ee4\u884c\uff0cHAVING \u8fc7\u6ee4\u5206\u7ec4\uff0c\u884c\u8fc7\u6ee4\u5e94\u5f53\u5148\u4e8e\u5206\u7ec4\u8fc7\u6ee4\u3002\nSELECT col, COUNT(*) AS num\nFROM mytable\nWHERE col > 2\nGROUP BY col\nHAVING num >= 2;\n")),(0,l.kt)("p",null,"\u5206\u7ec4\u89c4\u5b9a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GROUP BY \u5b50\u53e5\u51fa\u73b0\u5728 WHERE \u5b50\u53e5\u4e4b\u540e\uff0cORDER BY \u5b50\u53e5\u4e4b\u524d\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86\u6c47\u603b\u5b57\u6bb5\u5916\uff0cSELECT \u8bed\u53e5\u4e2d\u7684\u6bcf\u4e00\u5b57\u6bb5\u90fd\u5fc5\u987b\u5728 GROUP BY \u5b50\u53e5\u4e2d\u7ed9\u51fa\uff1b"),(0,l.kt)("li",{parentName:"ul"},"NULL \u7684\u884c\u4f1a\u5355\u72ec\u5206\u4e3a\u4e00\u7ec4\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570 SQL \u5b9e\u73b0\u4e0d\u652f\u6301 GROUP BY \u5217\u5177\u6709\u53ef\u53d8\u957f\u5ea6\u7684\u6570\u636e\u7c7b\u578b\u3002")),(0,l.kt)("h5",{id:"function"},(0,l.kt)("inlineCode",{parentName:"h5"},"function()")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Max()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- Second Highest Salary\nSELECT\n    Max(e1.Salary) SecondHighestSalary\nFROM\n    Employee e1,\n    (\n        SELECT\n            Max(Salary) Salary\n        FROM\n            employee\n    ) e2\nWHERE\n    e1.Salary != e2.Salary\nORDER BY\n    e1.Salary DESC;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- ORDER BY & LIMIT\nSELECT\n    (\n        SELECT\n            DISTINCT salary\n        FROM\n            Employee\n        ORDER BY\n            salary DESC\n        LIMIT\n            1, 1\n    ) AS SecondHighestSalary;\n\n-- \u7b2cN\u9ad8\nCREATE FUNCTION getNthHighestSalary (N INT) RETURNS INT BEGIN\nSET\n    N = N - 1;\n\nRETURN (\n    SELECT\n        (\n            SELECT\n                DISTINCT Salary\n            FROM\n                Employee\n            ORDER BY\n                Salary DESC\n            LIMIT\n                N, 1\n        )\n);\n\nEND;\n\nSELECT\n    getNthHighestSalary(3);\n")),(0,l.kt)("h5",{id:"delete"},(0,l.kt)("inlineCode",{parentName:"h5"},"DELETE")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- \u8fde\u63a5\nDELETE p1\nFROM\n    person p1,\n    person p2\nWHERE\n    p1.email = p2.email\n    AND p1.id > p2.id\n\n-- \u5b50\u67e5\u8be2\nDELETE\nFROM\n    Person\nWHERE\n    id NOT IN ( SELECT id FROM ( SELECT min( id ) AS id FROM Person GROUP BY email ) AS m );\n")),(0,l.kt)("h5",{id:"join"},(0,l.kt)("inlineCode",{parentName:"h5"},"JOIN")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JOIN ON")),(0,l.kt)("p",null,"\u5185\u8fde\u63a5 \u81ea\u8fde\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"INNER JOIN")),(0,l.kt)("p",null,"\u81ea\u7136\u8fde\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"NATURAL JOIN")),(0,l.kt)("p",null,"\u5916\u8fde\u63a5\uff1a \u5de6\u5916\u8fde\u63a5\uff0c\u53f3\u5916\u8fde\u63a5\u4ee5\u53ca\u5168\u5916\u8fde\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"LEFT OUTER JOIN"),"  ",(0,l.kt)("inlineCode",{parentName:"p"},"RIGHT OUTER JOIN"),"  ",(0,l.kt)("inlineCode",{parentName:"p"},"FULL JOIN")," "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"-- INNER JOIN\nSELECT\n    a.Name Employee\nFROM\n    Employee a\n    JOIN Employee b ON a.ManagerId = b.Id\nWHERE\n    a.Salary > b.Salary;\n    \n\n    \n-- LEFT JOIN\nSELECT\n    p.firstname,\n    p.lastname,\n    a.city,\n    a.state\nFROM\n    person AS p\n    LEFT JOIN address AS a ON p.personId = a.personId;\n    \nSELECT\n    c.Name Customers\nFROM\n    Customers c\n    LEFT JOIN Orders o ON c.Id = o.CustomerId\nWHERE\n    o.id IS NULL;\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tmp"},"tmp"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mycli -uroot -p1234\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"Create table If Not Exists Logs (Id int, Num int);\nTruncate table Logs\ninsert into Logs (Id, Num) values ('1', '1'),('2', '1'),('3', '1'),('4', '2'),('5', '1'),('6', '2'),('7', '2');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"select * from \n(select * from\nlogs l1 join logs l2\non l1.num = l2.num AND l2.id = l1.id + 1) lt join logs l3\non l1.num = l3.num AND l3.id = l2.id + 1;\n\nselect DISTINCT l3.num  `ConsecutiveNums` from \n(select l1.id id1,l1.num num1,l2.id id2,l2.num num2 from\nlogs l1 join logs l2\non l1.num = l2.num AND l2.id = l1.id + 1) lt join logs l3\non lt.num1 = l3.num AND l3.id = lt.id2 + 1;\n\nSELECT DISTINCT Num ConsecutiveNums FROM\n  (SELECT Num,(RowNo - ROW_NUMBER() OVER (PARTITION BY Num ORDER BY RowNo)) Rank FROM \n    (SELECT Num,ROW_NUMBER() OVER (ORDER BY Id) RowNo FROM Logs) A ) B\nGROUP BY Num,Rank\nHAVING COUNT(1) >=3;\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/rank-scores/"},"https://leetcode-cn.com/problems/rank-scores/")),(0,l.kt)("p",null," ","[https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database%20%E9%A2%98%E8%A7%A3.md#178-rank-scores]","(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database"},"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database")," \u9898\u89e3.md#178-rank-scores) "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Peefy/JavaInVSCode"},"https://github.com/Peefy/JavaInVSCode")))}d.isMDXComponent=!0}}]);