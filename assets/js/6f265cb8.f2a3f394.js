"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5442],{8830:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(5893),s=a(1151);const i={},r=void 0,l={id:"BE/Java/mybatis",title:"mybatis",description:"https://www.cnblogs.com/caizhaokai/p/10982727.html",source:"@site/docs/BE/Java/mybatis.md",sourceDirName:"BE/Java",slug:"/BE/Java/mybatis",permalink:"/docs/BE/Java/mybatis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"main",permalink:"/docs/BE/Java/main"},next:{title:"rxjava",permalink:"/docs/BE/Java/rxjava"}},c={},d=[{value:"\u7b80\u5355 sql",id:"\u7b80\u5355-sql",level:4},{value:"2.1 \u4f20\u5165\u53c2\u6570",id:"21-\u4f20\u5165\u53c2\u6570",level:5},{value:"2.2 Insert\uff0cUpdate\uff0cDelete \u8fd4\u56de\u503c",id:"22-insertupdatedelete-\u8fd4\u56de\u503c",level:5},{value:"\u3000 2.3 Select",id:"-23-select",level:5},{value:"\u52a8\u6001 sql",id:"\u52a8\u6001-sql",level:4},{value:"if",id:"if",level:5}];function o(e){const n={a:"a",code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.cnblogs.com/caizhaokai/p/10982727.html",children:"https://www.cnblogs.com/caizhaokai/p/10982727.html"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://mybatis.org/mybatis-3/zh/java-api.html",children:"https://mybatis.org/mybatis-3/zh/java-api.html"})}),"\n",(0,t.jsx)(n.h4,{id:"\u7b80\u5355-sql",children:"\u7b80\u5355 sql"}),"\n",(0,t.jsx)(n.h5,{id:"21-\u4f20\u5165\u53c2\u6570",children:"2.1 \u4f20\u5165\u53c2\u6570"}),"\n",(0,t.jsx)(n.p,{children:"(1) \u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a JavaBean"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"int insertUser(User bean);\n"})}),"\n",(0,t.jsx)(n.p,{children:"(2) \u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a Map"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"int insertUserByMap(Map<String, Object> map);\n"})}),"\n",(0,t.jsx)(n.p,{children:'(3) \u53ef\u4ee5\u4f20\u5165\u591a\u4e2a\u53c2\u6570\uff0c\u9700\u4f7f\u7528@Param("ParamName") \u4fee\u9970\u53c2\u6570'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'int insertUserByParam(@Param("id") String id, @Param("name") String name, @Param("age") int age);\n'})}),"\n",(0,t.jsx)(n.h5,{id:"22-insertupdatedelete-\u8fd4\u56de\u503c",children:"2.2 Insert\uff0cUpdate\uff0cDelete \u8fd4\u56de\u503c"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u53e3\u65b9\u6cd5\u8fd4\u56de\u503c\u53ef\u4ee5\u4f7f\u7528 void \u6216 int\uff0cint \u8fd4\u56de\u503c\u4ee3\u8868\u5f71\u54cd\u884c\u6570"}),"\n",(0,t.jsx)(n.h5,{id:"-23-select",children:"\u3000 2.3 Select"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"sql \u4e2d as \u6539\u540d"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528@Results \u5904\u7406\u6620\u5c04"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'@Result(property = "provinceId", column = "province_id")'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'    @Select("SELECT * FROM city where city_name = #{cityName}")\n    // \u8fd4\u56de Map \u7ed3\u679c\u96c6\n    @Results({@Result(property = "id", column = "id"),\n            @Result(property = "provinceId", column = "province_id"),\n            @Result(property = "cityName", column = "city_name"),\n            @Result(property = "description", column = "description")})\n    City findByName(@Param("cityName") String cityName);\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e resultMap \u53ef\u4ee5\u7ed9\u4e0e\u4e00\u4e2a id\uff0c\u5176\u4ed6\u65b9\u6cd5\u53ef\u4ee5\u6839\u636e\u8be5 id \u6765\u91cd\u590d\u4f7f\u7528\u8fd9\u4e2a resultMap"}),"\n",(0,t.jsxs)(n.p,{children:['@Results(id="userResults", value=',")"]}),"\n",(0,t.jsx)(n.p,{children:'@ResultMap("userResults")'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:' @Results(id="userResults", value={\n            @Result(property="id",   column="t_id"),\n            @Result(property="age",  column="t_age"),\n            @Result(property="name", column="t_name"),\n    })\n\u3000\u3000 User selectUserById(@Param("id") String id);\n\n @Select("select t_id, t_age, t_name  "\n            + "from sys_user             "\n            + "where t_name = #{name}        ")\n    @ResultMap("userResults")\n\u3000\u3000 User selectUserByName(@Param("name") String name);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"\u52a8\u6001-sql",children:"\u52a8\u6001 sql"}),"\n",(0,t.jsx)(n.h5,{id:"if",children:"if"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mysql",children:"x\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'   + "<if test=\'achieveStatus == &quot;yes&quot;.toString()\'>and c.achievedate IS NOT NULL </if>"\n            + "<if test=\'achieveStatus == &quot;no&quot;.toString()\'>and c.achievedate IS NULL </if>" + "</if>"\n            + "<if test=\'achieveStart != null and achieveStart != &quot;&quot; and achieveEnd != null and achieveEnd != &quot;&quot;\'>and date(c.achievedate) between #{achieveStart} and #{achieveEnd} </if>"\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);