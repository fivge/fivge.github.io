"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4534],{4598:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var i=s(5893),r=s(1151);const n={title:"mycli",date:new Date("2018-08-22T17:42:17.000Z")},p=void 0,a={id:"CloudNative/term/mycli",title:"mycli",description:"https://www.mycli.net/",source:"@site/docs/CloudNative/term/mycli.md",sourceDirName:"CloudNative/term",slug:"/CloudNative/term/mycli",permalink:"/docs/CloudNative/term/mycli",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"mycli",date:"2018-08-22T17:42:17.000Z"},sidebar:"tutorialSidebar",previous:{title:"C++ with Libcurl",permalink:"/docs/CloudNative/term/libcurl"},next:{title:"nc",permalink:"/docs/CloudNative/term/nc"}},l={},u=[{value:"\u67e5\u8be2\u4f9b\u5e94\u5546\u7701\u4efd\u4fe1\u606f",id:"\u67e5\u8be2\u4f9b\u5e94\u5546\u7701\u4efd\u4fe1\u606f",level:3},{value:"\u6dfb\u52a0\u4f9b\u5e94\u5546",id:"\u6dfb\u52a0\u4f9b\u5e94\u5546",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.mycli.net/",children:"https://www.mycli.net/"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-vbscript",children:'MasterDb.global.properties= "ip=172.22.38.141,  port=3306,dbName=dev, dbType=mysql ,dbStatus=RW"\nMasterDb.app.properties= "userName=market ,checkValidConnectionSQL=select 1,minPoolSize=5 , maxPoolSize=10 , idleTimeout=1000 , blockingTimeout=100000,preparedStatementCacheSize=15 ,connectionProperties=connectTimeout=1000&autoReconnect=true&socketTimeout=12000&characterEncoding=utf-8&rewriteBatchedStatements=true"\nMasterDb.passwd.properties= "encPasswd=market"\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ mycli -h localhost -u root app_db\n$ mycli mysql://amjith@localhost:3306/django_poll\n\n\nmycli mysql://market@172.22.38.141:3306/dev\n\nmycli -h 172.22.38.141 -u market dev\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-mysql",children:'SELECT COUNT(g)  FROM  WHERE `status`="\u4e0a\u67b6" AND ztlx IS NOT NULL GROUP BY ztlx;\n\ngoods_supplier\n\nprovince\n\nsupplier_id\n\nSELECT COUNT(supplier_id) FROM goods_supplier;\n\n\n//\u67e5\u8be2 \u4f20 json\nSELECT province,COUNT(supplier_id) num FROM goods_supplier GROUP BY province;\n'})}),"\n",(0,i.jsx)(t.h3,{id:"\u67e5\u8be2\u4f9b\u5e94\u5546\u7701\u4efd\u4fe1\u606f",children:"\u67e5\u8be2\u4f9b\u5e94\u5546\u7701\u4efd\u4fe1\u606f"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n"http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.inspur.manage.Mapper.IndexsMapper">\n    <select id="selectuser" resultType="map">\n\tselect count(nickname) as total,FROM_UNIXTIME(create_time,\'%Y-%m-%d\') as create_time\n\t\tfrom user group BY FROM_UNIXTIME(create_time,\'%Y-%m-%d\');\n</select>\n    <select id="selectAmaker" resultType="map">\n\tselect count(name) as total,FROM_UNIXTIME(add_time,\'%Y-%m-%d\') as add_time\n\t\tfrom amaker group BY FROM_UNIXTIME(add_time,\'%Y-%m-%d\');\n</select>\n    <select id="selectBmaker" resultType="map">\n\t\tselect count(name) as total,FROM_UNIXTIME(add_time,\'%Y-%m-%d\') as add_time\n\t\tfrom bmaker group BY FROM_UNIXTIME(add_time,\'%Y-%m-%d\');\n</select>\n    <select id="OpendataSum" resultType="String" parameterType="map">\n    SELECT sum(total_price) as sales FROM order_build WHERE pay_status = \'paid\' AND pay_time BETWEEN #{sdate} AND #{edate};\n</select>\n    <select id="DatasqSum" resultType="String" parameterType="map">\n    SELECT count(*) FROM order_build WHERE create_time BETWEEN #{sdate} AND #{edate};\n</select>\n    <select id="DemandSum" resultType="String" parameterType="map">\n    SELECT count(*) FROM goods_supplier WHERE create_time BETWEEN #{sdate} AND #{edate};\n</select>\n    <select id="OrderSum" resultType="String" parameterType="map">\n    SELECT count(*) FROM goods_info WHERE is_shelved = \'\u5df2\u4e0a\u67b6\' AND shelved_time BETWEEN #{sdate} AND #{edate};\n</select>\n    <select id="selectcategory" resultType="map">\n\tSELECT COUNT(goods_id) num,ztlx FROM opendata WHERE `status`="\u4e0a\u67b6" AND ztlx IS NOT NULL GROUP BY ztlx;\n</select>\n    <select id="selectcitytop" resultType="map">\n\tSELECT COUNT(*) num,t1.area,t2.dq_mc FROM opendata t1 INNER JOIN code_table_area t2 ON t1.area=t2.dq_dm GROUP BY t1.area ORDER BY num DESC LIMIT 5;\n</select>\n    <select id="selectareahot" resultType="map">\n\tselect COUNT(*) num,t1.area,t2.dq_mc,substring(t1.area,1,2) ea FROM opendata t1 INNER JOIN code_table_area t2 ON substring(t1.area,1,2)=t2.dq_dm GROUP BY substring(t1.area,1,2);\n</select>\n</mapper>\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"\u6dfb\u52a0\u4f9b\u5e94\u5546",children:"\u6dfb\u52a0\u4f9b\u5e94\u5546"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'     <insert id="addSuppliers" parameterType="map" >\n       insert into goods_supplier(supplier_name,province,short_name,supplier_img,description,supplier_url,state,supplier_index,key_name,supplier_tab,supplier_key,customerservice,workinghours,email,link_flag,link_key,key_ctime)\n       values (\n        #{supplierName},#{supplierProvince},#{shortName},#{imgUrl},#{content},#{supplierUrl},\'1\',#{score},#{key_name},\n        #{supplier_tab},#{supplier_key},#{customerservice},#{workinghours},#{email},#{link_flag},\n        #{link_key},#{key_ctime})\n\n    </insert>\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"all.xml"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n"http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.inspur.manage.Mapper.SuppliersMapper">\n\t<select id="findSuppliers" parameterType="map" resultType="map">\n    \tSELECT\n    \t\tsupplier_id AS id,\n    \t\tsupplier_id AS supplier_id,\n    \t\tsupplier_name AS suppliername,\n    \t\tshort_name AS shortname,\n    \t\tsupplier_index AS score,\n    \t\tcustomerservice,\n    \t\tworkinghours,\n    \t\temail,\n    \t\tIFNULL(liaison_name,\'\') AS liaison_name,\n    \t\tIFNULL(liaison_phone,\'\') AS liaison_phone,\n    \t\tIFNULL(liaison_email,\'\') AS liaison_email,\n\t\t\tCASE\n\t\t\t\tWHEN state =\'0\' THEN \'\u9690\u85cf\'\n\t\t\t\tWHEN state = \'1\' THEN \'\u663e\u793a\'\n\t\t\tEND status\n\t\tFROM goods_supplier\n    \tWHERE 1=1\n    \t<if test="supplierName != null and supplierName !=\'\'">\n\t\t\tAND supplier_name LIKE \'%${supplierName}%\'\n\t\t</if>\n\n\t\t<if test="status != null and status !=\'\' ">\n\t\t\tAND state = #{status}\n\t\t</if>\n\t\t\tORDER BY supplier_id ASC\n    </select>\n    <select id="loadSuppliers" resultType="map">\n\n\n\n    </select>\n\n\t<insert id="addSuppliers" parameterType="map" >\n       insert into goods_supplier(supplier_name,province,short_name,supplier_img,description,supplier_url,state,supplier_index,key_name,supplier_tab,supplier_key,customerservice,workinghours,email,link_flag,link_key,key_ctime)\n       values (\n        #{supplierName},#{supplierProvince},#{shortName},#{imgUrl},#{content},#{supplierUrl},\'1\',#{score},#{key_name},\n        #{supplier_tab},#{supplier_key},#{customerservice},#{workinghours},#{email},#{link_flag},\n        #{link_key},#{key_ctime})\n    </insert>\n\n\t<select id="searchInfo"  resultType="map">\n     \tselect * from goods_supplier where supplier_id = #{id}\n\t</select>\n\n\n    <update id="updateSuppliers" parameterType="map" >\n        update goods_supplier set supplier_name = #{supplierName},short_name = #{shortName},customerservice = #{customerservice},workinghours = #{workinghours},email = #{email},\n        supplier_img = #{imgUrl},key_name = #{key_name},supplier_key=#{supplier_key},supplier_tab=#{supplier_tab},\n        description = #{content},supplier_url = #{supplierUrl},supplier_index = #{score},link_flag=#{link_flag},link_key=#{link_key},key_ctime=#{key_ctime}\n        where supplier_id = #{id}\n\n   \t</update>\n   \t<update id="updateStatus" parameterType="map" >\n        update goods_supplier set state = #{status}\n        where supplier_id = #{id}\n\n   \t</update>\n\n   \t<select id="searchImgPath"  resultType="String">\n\t\tselect supplier_img from goods_supplier where supplier_id = #{id}\n\t</select>\n\t<select id="searchContent"  resultType="String">\n\t\tselect description from goods_supplier where supplier_id = #{id}\n\t</select>\n\t<delete id = "deleteData">\n\t\tdelete from goods_supplier where supplier_id = #{id}\n\t</delete>\n\n\t<select id="getMaxId"  resultType="int">\n\t\tselect max(supplier_id) from goods_supplier\n\n\t</select>\n</mapper>\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.inspur.manage.Mapper.SuppliersMapper">\n  <select id="findSuppliers" parameterType="map" resultType="map">SELECT supplier_id AS id, supplier_id AS supplier_id, supplier_name AS suppliername, short_name AS shortname, supplier_index AS score, customerservice, workinghours, email, IFNULL(liaison_name,\'\') AS liaison_name, IFNULL(liaison_phone,\'\') AS liaison_phone, IFNULL(liaison_email,\'\') AS liaison_email, CASE WHEN state =\'0\' THEN \'\u9690\u85cf\' WHEN state = \'1\' THEN \'\u663e\u793a\' END status FROM goods_supplier WHERE 1=1\n    <if test="supplierName != null and supplierName !=\'\'">AND supplier_name LIKE \'%${supplierName}%\'</if>\n    <if test="status != null and status !=\'\' ">AND state = #{status}</if> ORDER BY supplier_id ASC\n  </select>\n  <select id="loadSuppliers" resultType="map"></select>\n  <insert id="addSuppliers" parameterType="map">insert into goods_supplier(supplier_name,province,short_name,supplier_img,description,supplier_url,state,supplier_index,key_name,supplier_tab,supplier_key,customerservice,workinghours,email,link_flag,link_key,key_ctime) values ( #{supplierName},#{supplierProvince},#{shortName},#{imgUrl},#{content},#{supplierUrl},\'1\',#{score},#{key_name}, #{supplier_tab},#{supplier_key},#{customerservice},#{workinghours},#{email},#{link_flag}, #{link_key},#{key_ctime})</insert>\n  <select id="searchInfo" resultType="map">select * from goods_supplier where supplier_id = #{id}</select>\n  <update id="updateSuppliers" parameterType="map">update goods_supplier set supplier_name = #{supplierName},short_name = #{shortName},customerservice = #{customerservice},workinghours = #{workinghours},email = #{email}, supplier_img = #{imgUrl},key_name = #{key_name},supplier_key=#{supplier_key},supplier_tab=#{supplier_tab}, description = #{content},supplier_url = #{supplierUrl},supplier_index = #{score},link_flag=#{link_flag},link_key=#{link_key},key_ctime=#{key_ctime} where supplier_id = #{id}</update>\n  <update id="updateStatus" parameterType="map">update goods_supplier set state = #{status} where supplier_id = #{id}</update>\n  <select id="searchImgPath" resultType="String">select supplier_img from goods_supplier where supplier_id = #{id}</select>\n  <select id="searchContent" resultType="String">select description from goods_supplier where supplier_id = #{id}</select>\n  <delete id="deleteData">delete from goods_supplier where supplier_id = #{id}</delete>\n  <select id="getMaxId" resultType="int">select max(supplier_id) from goods_supplier</select>\n</mapper>\n\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>p});var i=s(7294);const r={},n=i.createContext(r);function p(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:p(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);