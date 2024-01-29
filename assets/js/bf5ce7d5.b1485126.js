"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75],{7150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>E,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var a=s(5893),l=s(1151);const c={},o=void 0,d={id:"BE/Java/SQL/basic",title:"basic",description:"database",source:"@site/docs/BE/Java/SQL/basic.md",sourceDirName:"BE/Java/SQL",slug:"/BE/Java/SQL/basic",permalink:"/docs/BE/Java/SQL/basic",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BE",permalink:"/docs/BE/"},next:{title:"basic",permalink:"/docs/BE/Java/basic"}},r={},t=[{value:"database",id:"database",level:4},{value:"table",id:"table",level:4},{value:"<code>SELECT</code>",id:"select",level:5},{value:"<code>INSERT</code>",id:"insert",level:5},{value:"<code>UPDATE</code>",id:"update",level:5},{value:"<code>IN</code> <code>NOT</code>",id:"in-not",level:5},{value:"<code>between and</code>\u2026",id:"between-and",level:5},{value:"<code>GROUP BY</code> <code>ORDER BY</code>",id:"group-by-order-by",level:5},{value:"<code>function()</code>",id:"function",level:5},{value:"<code>DELETE</code>",id:"delete",level:5},{value:"<code>JOIN</code>",id:"join",level:5},{value:"tmp",id:"tmp",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h4,{id:"database",children:"database"}),"\n",(0,a.jsx)(n.h4,{id:"table",children:"table"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"Truncate table Person\n"})}),"\n",(0,a.jsx)(n.h5,{id:"select",children:(0,a.jsx)(n.code,{children:"SELECT"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- OR\nSELECT name, population, area FROM world\nWHERE area > 3000000 OR population > 25000000;\n\n-- UNION\nSELECT name, population, area FROM world\nWHERE area > 3000000\nUNION\nSELECT name, population, area FROM world\nWHERE population > 25000000;\n\n-- AND\nSELECT * FROM cinema\nWHERE id % 2 = 1 AND description != 'boring'\nORDER BY rating DESC;\n\n-- https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database%20%E9%A2%98%E8%A7%A3.md#178-rank-scores\nSELECT a.Score AS score,\n    (SELECT count(DISTINCT b.Score)\n        FROM Scores b\n        WHERE b.Score >= a.Score\n    ) AS rank\nFROM Scores a\nORDER BY Score DESC;\n-- INNER JOIN\nSELECT\n    S1.score 'Score',\n    COUNT( DISTINCT S2.score ) 'Rank'\nFROM\n    Scores S1\n    INNER JOIN Scores S2\n    ON S1.score <= S2.score\nGROUP BY\n    S1.id, S1.score\nORDER BY\n    S1.score DESC;\n"})}),"\n",(0,a.jsx)(n.h5,{id:"insert",children:(0,a.jsx)(n.code,{children:"INSERT"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql"})}),"\n",(0,a.jsx)(n.h5,{id:"update",children:(0,a.jsx)(n.code,{children:"UPDATE"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- CASE WHEN\nUPDATE salary\nSET\n    sex = CASE sex\n        WHEN 'm' THEN 'f'\n        WHEN 'f' THEN 'm'\n        ELSE 'x'\n    END;\n\n-- IF\nUPDATE salary\nSET\n    sex = IF(sex = 'm', 'f', 'm');\n\n-- char\nUPDATE salary\nSET\n    sex = char(ascii('m') + ascii('f') - ascii(sex));\n"})}),"\n",(0,a.jsxs)(n.h5,{id:"in-not",children:[(0,a.jsx)(n.code,{children:"IN"})," ",(0,a.jsx)(n.code,{children:"NOT"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- IN\n\n-- https://leetcode-cn.com/problems/department-highest-salary/\nSELECT\n    d.Name Department,\n    e.Name Employee,\n    e.Salary Salary\nFROM\n    Employee e\n    JOIN Department d ON e.DepartmentId = d.Id\nWHERE\n    (e.Salary, e.DepartmentId) IN (\n        SELECT\n            Max(Salary),\n            DepartmentId\n        FROM\n            Employee\n        GROUP BY\n            DepartmentId\n    );\n"})}),"\n",(0,a.jsxs)(n.h5,{id:"between-and",children:[(0,a.jsx)(n.code,{children:"between and"}),"\u2026"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"select * from product where date(add_time) between '2013-01-01' and '2013-01-31'\n"})}),"\n",(0,a.jsxs)(n.h5,{id:"group-by-order-by",children:[(0,a.jsx)(n.code,{children:"GROUP BY"})," ",(0,a.jsx)(n.code,{children:"ORDER BY"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- https://leetcode-cn.com/problems/classes-more-than-5-students/comments/\n\n#\u6700\u6734\u5b9e\u7684\u5199\u6cd5\uff0c\u5171\u4e09\u5c42\u67e5\u8be2\uff0c\u5148\u5229\u7528 DISTINCT \u53bb\u6389\u91cd\u590d\u8bb0\u5f55\u5f97\u5230\u8868 A\uff0c\u518d\u5229\u7528 GROUP BY \u4e3a CLASS \u5206\u7ec4\uff0c\u7136\n#\u540e\u7528 COUNT() \u7edf\u8ba1\u6bcf\u7ec4\u4e2a\u6570\u5f97\u5230\u8868 B\uff0c\u6700\u540e\u5728\u6700\u5916\u5c42\u9650\u5b9a\u6570\u91cf >=5 \u67e5\u5230\u7ed3\u679c\nSELECT b.class FROM\n    ( SELECT a.class, count(a.class) c FROM\n            ( SELECT DISTINCT * FROM courses ) a\n        GROUP BY a.class\n    ) b\nWHERE b.c >= 5;\n\n# HAVING\nSELECT b.class, count(b.class) FROM\n    ( SELECT DISTINCT a.student, a.class FROM courses a ) b\nGROUP BY b.class\nHAVING count(b.class) >= 5;\n\n# \u5bf9 class \u5217\u8fdb\u884c\u5206\u7ec4\u4e4b\u540e\uff0c\u518d\u4f7f\u7528 count \u6c47\u603b\u51fd\u6570\u7edf\u8ba1\u6570\u91cf\uff0c\u7edf\u8ba1\u4e4b\u540e\u4f7f\u7528 having \u8fdb\u884c\u8fc7\u6ee4\nSELECT class FROM courses\nGROUP BY class\nHAVING count( DISTINCT student ) >= 5;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"# GROUP BY \u81ea\u52a8\u6309\u5206\u7ec4\u5b57\u6bb5\u8fdb\u884c\u6392\u5e8f\uff0cORDER BY \u4e5f\u53ef\u4ee5\u6309\u6c47\u603b\u5b57\u6bb5\u6765\u8fdb\u884c\u6392\u5e8f\u3002\nSELECT col, COUNT(*) AS num\nFROM mytable\nGROUP BY col\nORDER BY num;\n\n# WHERE \u8fc7\u6ee4\u884c\uff0cHAVING \u8fc7\u6ee4\u5206\u7ec4\uff0c\u884c\u8fc7\u6ee4\u5e94\u5f53\u5148\u4e8e\u5206\u7ec4\u8fc7\u6ee4\u3002\nSELECT col, COUNT(*) AS num\nFROM mytable\nWHERE col > 2\nGROUP BY col\nHAVING num >= 2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5206\u7ec4\u89c4\u5b9a\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"GROUP BY \u5b50\u53e5\u51fa\u73b0\u5728 WHERE \u5b50\u53e5\u4e4b\u540e\uff0cORDER BY \u5b50\u53e5\u4e4b\u524d\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u9664\u4e86\u6c47\u603b\u5b57\u6bb5\u5916\uff0cSELECT \u8bed\u53e5\u4e2d\u7684\u6bcf\u4e00\u5b57\u6bb5\u90fd\u5fc5\u987b\u5728 GROUP BY \u5b50\u53e5\u4e2d\u7ed9\u51fa\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"NULL \u7684\u884c\u4f1a\u5355\u72ec\u5206\u4e3a\u4e00\u7ec4\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5927\u591a\u6570 SQL \u5b9e\u73b0\u4e0d\u652f\u6301 GROUP BY \u5217\u5177\u6709\u53ef\u53d8\u957f\u5ea6\u7684\u6570\u636e\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h5,{id:"function",children:(0,a.jsx)(n.code,{children:"function()"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Max()"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- Second Highest Salary\nSELECT\n    Max(e1.Salary) SecondHighestSalary\nFROM\n    Employee e1,\n    (\n        SELECT\n            Max(Salary) Salary\n        FROM\n            employee\n    ) e2\nWHERE\n    e1.Salary != e2.Salary\nORDER BY\n    e1.Salary DESC;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- ORDER BY & LIMIT\nSELECT\n    (\n        SELECT\n            DISTINCT salary\n        FROM\n            Employee\n        ORDER BY\n            salary DESC\n        LIMIT\n            1, 1\n    ) AS SecondHighestSalary;\n\n-- \u7b2cN\u9ad8\nCREATE FUNCTION getNthHighestSalary (N INT) RETURNS INT BEGIN\nSET\n    N = N - 1;\n\nRETURN (\n    SELECT\n        (\n            SELECT\n                DISTINCT Salary\n            FROM\n                Employee\n            ORDER BY\n                Salary DESC\n            LIMIT\n                N, 1\n        )\n);\n\nEND;\n\nSELECT\n    getNthHighestSalary(3);\n"})}),"\n",(0,a.jsx)(n.h5,{id:"delete",children:(0,a.jsx)(n.code,{children:"DELETE"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- \u8fde\u63a5\nDELETE p1\nFROM\n    person p1,\n    person p2\nWHERE\n    p1.email = p2.email\n    AND p1.id > p2.id\n\n-- \u5b50\u67e5\u8be2\nDELETE\nFROM\n    Person\nWHERE\n    id NOT IN ( SELECT id FROM ( SELECT min( id ) AS id FROM Person GROUP BY email ) AS m );\n"})}),"\n",(0,a.jsx)(n.h5,{id:"join",children:(0,a.jsx)(n.code,{children:"JOIN"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"JOIN ON"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5185\u8fde\u63a5 \u81ea\u8fde\u63a5 ",(0,a.jsx)(n.code,{children:"INNER JOIN"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u81ea\u7136\u8fde\u63a5 ",(0,a.jsx)(n.code,{children:"NATURAL JOIN"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5916\u8fde\u63a5\uff1a \u5de6\u5916\u8fde\u63a5\uff0c\u53f3\u5916\u8fde\u63a5\u4ee5\u53ca\u5168\u5916\u8fde\u63a5 ",(0,a.jsx)(n.code,{children:"LEFT OUTER JOIN"}),"  ",(0,a.jsx)(n.code,{children:"RIGHT OUTER JOIN"}),"  ",(0,a.jsx)(n.code,{children:"FULL JOIN"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"-- INNER JOIN\nSELECT\n    a.Name Employee\nFROM\n    Employee a\n    JOIN Employee b ON a.ManagerId = b.Id\nWHERE\n    a.Salary > b.Salary;\n    \n\n    \n-- LEFT JOIN\nSELECT\n    p.firstname,\n    p.lastname,\n    a.city,\n    a.state\nFROM\n    person AS p\n    LEFT JOIN address AS a ON p.personId = a.personId;\n    \nSELECT\n    c.Name Customers\nFROM\n    Customers c\n    LEFT JOIN Orders o ON c.Id = o.CustomerId\nWHERE\n    o.id IS NULL;\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h3,{id:"tmp",children:"tmp"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mycli -uroot -p1234\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"Create table If Not Exists Logs (Id int, Num int);\nTruncate table Logs\ninsert into Logs (Id, Num) values ('1', '1'),('2', '1'),('3', '1'),('4', '2'),('5', '1'),('6', '2'),('7', '2');\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mysql",children:"select * from \n(select * from\nlogs l1 join logs l2\non l1.num = l2.num AND l2.id = l1.id + 1) lt join logs l3\non l1.num = l3.num AND l3.id = l2.id + 1;\n\nselect DISTINCT l3.num  `ConsecutiveNums` from \n(select l1.id id1,l1.num num1,l2.id id2,l2.num num2 from\nlogs l1 join logs l2\non l1.num = l2.num AND l2.id = l1.id + 1) lt join logs l3\non lt.num1 = l3.num AND l3.id = lt.id2 + 1;\n\nSELECT DISTINCT Num ConsecutiveNums FROM\n  (SELECT Num,(RowNo - ROW_NUMBER() OVER (PARTITION BY Num ORDER BY RowNo)) Rank FROM \n\t(SELECT Num,ROW_NUMBER() OVER (ORDER BY Id) RowNo FROM Logs) A ) B\nGROUP BY Num,Rank\nHAVING COUNT(1) >=3;\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode-cn.com/problems/rank-scores/",children:"https://leetcode-cn.com/problems/rank-scores/"})}),"\n",(0,a.jsxs)(n.p,{children:["[",(0,a.jsx)(n.a,{href:"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database%20%E9%A2%98%E8%A7%A3.md#178-rank-scores%5D(",children:"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database%20%E9%A2%98%E8%A7%A3.md#178-rank-scores]("}),(0,a.jsx)(n.a,{href:"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database",children:"https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode-Database"})," \u9898\u89e3.md#178-rank-scores)"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/Peefy/JavaInVSCode",children:"https://github.com/Peefy/JavaInVSCode"})})]})}function E(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var a=s(7294);const l={},c=a.createContext(l);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);