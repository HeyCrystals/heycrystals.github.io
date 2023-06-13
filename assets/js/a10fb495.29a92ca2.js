"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2602],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>d});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function p(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var o=n.createContext({}),g=function(e){var t=n.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=g(e.components);return n.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=g(s),d=a,m=u["".concat(o,".").concat(d)]||u[d]||i[d]||r;return s?n.createElement(m,l(l({ref:t},c),{},{components:s})):n.createElement(m,l({ref:t},c))}));function d(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,l=new Array(r);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var g=2;g<r;g++)l[g]=s[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}u.displayName="MDXCreateElement"},6658:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>g});var n=s(87462),a=(s(67294),s(3905));const r={layout:"post",title:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",categories:"\u6570\u636e\u5e93",description:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",keywords:["postgresql"]},l=void 0,p={unversionedId:"database/2018-05-31-postgres-operation",id:"database/2018-05-31-postgres-operation",title:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",description:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",source:"@site/programmer/blog/database/2018-05-31-postgres-operation.md",sourceDirName:"database",slug:"/database/2018-05-31-postgres-operation",permalink:"/blog/database/2018-05-31-postgres-operation",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/database/2018-05-31-postgres-operation.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",categories:"\u6570\u636e\u5e93",description:"postgresql \u5b89\u88c5|\u91cd\u7f6e\u5bc6\u7801|\u5907\u4efd\u6570\u636e|\u5bfc\u5165\u6570\u636e",keywords:["postgresql"]},sidebar:"tutorialSidebar",previous:{title:"Mariadb\u521b\u5efa\u7d22\u5f15",permalink:"/blog/database/2018-05-18-mariadb-create-index"},next:{title:"\u8bbajs\u95ed\u5305\u7684\u91cd\u8981\u6027",permalink:"/blog/javascript/js-closure"}},o={},g=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u91cd\u7f6e\u5bc6\u7801",id:"\u91cd\u7f6e\u5bc6\u7801",level:2},{value:"\u91cd\u542f\u6570\u636e\u5e93",id:"\u91cd\u542f\u6570\u636e\u5e93",level:2},{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"\u521b\u5efa\u6570\u636e\u5e93",level:2},{value:"\u5220\u9664\u6570\u636e\u5e93",id:"\u5220\u9664\u6570\u636e\u5e93",level:2},{value:"\u5907\u4efd\u6570\u636e",id:"\u5907\u4efd\u6570\u636e",level:2},{value:"\u5bfc\u5165\u6570\u636e\u5e93",id:"\u5bfc\u5165\u6570\u636e\u5e93",level:2},{value:"\u76f8\u5173\u64cd\u4f5c",id:"\u76f8\u5173\u64cd\u4f5c",level:2},{value:"\u67e5\u770b\u6570\u636e\u5e93",id:"\u67e5\u770b\u6570\u636e\u5e93",level:3},{value:"\u67e5\u770b\u591a\u8868",id:"\u67e5\u770b\u591a\u8868",level:3},{value:"\u67e5\u770b\u7d22\u5f15",id:"\u67e5\u770b\u7d22\u5f15",level:3},{value:"\u67e5\u770b\u8868\u7a7a\u95f4\uff0c\u4ee5\u53ca\u5927\u5c0f",id:"\u67e5\u770b\u8868\u7a7a\u95f4\u4ee5\u53ca\u5927\u5c0f",level:3}],c={toc:g};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u672c\u673a\u5728Centos 7\u73af\u5883\u4e0b\u5b89\u88c5postgresql"),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u56fe\u5b89\u88c5\u65b9\u5f0f\u5b89\u88c5\u5b8c\u6210,",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/linux/redhat/"},"\u5b89\u88c5\u6307\u5357")),(0,a.kt)("p",null,(0,a.kt)("img",{src:s(69811).Z,width:"1081",height:"524"})),(0,a.kt)("h2",{id:"\u91cd\u7f6e\u5bc6\u7801"},"\u91cd\u7f6e\u5bc6\u7801"),(0,a.kt)("p",null,"\u5b8c\u6210\u5b89\u88c5\u540e,\u5e76\u4e0d\u77e5\u9053postgresql\u7684\u5bc6\u7801\uff0c\u5728\u670d\u52a1\u5668\u7ec8\u7aef\u901a\u8fc7ps\u547d\u4ee4\u53ef\u4ee5\u67e5\u5230postgres\u7684\u8fdb\u7a0b\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[root@ZABBIX-SERVER 9.5]# ps -ef|grep postgres\nroot     24737 24564  0 13:40 pts/1    00:00:00 su postgres\npostgres 24738 24737  0 13:40 pts/1    00:00:00 bash\npostgres 24902     1  0 13:43 pts/1    00:00:00 /usr/pgsql-9.5/bin/postgres -D /var/lib/pgsql/9.5/data\npostgres 24903 24902  0 13:43 ?        00:00:00 postgres: logger process   \npostgres 24905 24902  0 13:43 ?        00:00:00 postgres: checkpointer process   \npostgres 24906 24902  0 13:43 ?        00:00:00 postgres: writer process   \npostgres 24907 24902  0 13:43 ?        00:00:00 postgres: wal writer process   \npostgres 24908 24902  0 13:43 ?        00:00:00 postgres: autovacuum launcher process   \npostgres 24909 24902  0 13:43 ?        00:00:00 postgres: stats collector process   \nroot     26244 24816  0 13:50 pts/3    00:00:00 grep --color=auto postgres\n[root@ZABBIX-SERVER 9.5]# \n\n")),(0,a.kt)("p",null,"\u901a\u8fc7ps\u547d\u4ee4,postgres\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/pgsql-9.5/"),"\u76ee\u5f55\u4e0b\uff0c\u914d\u7f6e\u6587\u4ef6\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/pgsql/9.5/data"),"\u4e2d\uff0c\u8be5\u76ee\u5f55\u4e5f\u662f\u6570\u636e\u5e93\u5b58\u50a8\u76ee\u5f55"),(0,a.kt)("p",null,"\u7f16\u8f91pg_hba.conf\u6587\u4ef6  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vim /var/lib/pgsql/9.5/data/pg_hda.conf\n")),(0,a.kt)("p",null,"\u5c06\u539f\u6765\u6240\u6709\u65b9\u5f0f\u4fee\u6539\u4e3atrust\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# "local" is for Unix domain socket connections only\nlocal   all             all                                     md5\n# IPv4 local connections:\nhost    all             all             127.0.0.1/32            trust\nhost    all             all             0.0.0.0/0               trust\n# IPv6 local connections:\nhost    all             all             ::1/128                 trust\n\n')),(0,a.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\u91cd\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'su postgres\ncd /usr/pgsql-9.5/bin\n./pg_ctl restart -D /var/lib/pgsql/9.5/data\n\u7b49\u5f85\u670d\u52a1\u5668\u8fdb\u7a0b\u5173\u95ed .... \u5b8c\u6210\n\u670d\u52a1\u5668\u8fdb\u7a0b\u5df2\u7ecf\u5173\u95ed\n\u6b63\u5728\u542f\u52a8\u670d\u52a1\u5668\u8fdb\u7a0b\nbash-4.2$ < 2018-05-31 13:43:30.580 CST >\u65e5\u5fd7:  \u65e0\u6cd5\u7ed1\u5b9a IPv6 \u5957\u63a5\u5b57: \u65e0\u6cd5\u6307\u5b9a\u88ab\u8bf7\u6c42\u7684\u5730\u5740\n< 2018-05-31 13:43:30.580 CST >\u63d0\u793a:  \u662f\u5426\u6709\u5176\u5b83 postmaster \u5df2\u7ecf\u5728\u7aef\u53e3 5432 \u4e0a\u8fd0\u884c\u4e86? \u5982\u679c\u6ca1\u6709, \u8bf7\u7b49\u5f85\u51e0\u79d2\u949f\u540e\u7136\u540e\u518d\u91cd\u8bd5.\n< 2018-05-31 13:43:30.601 CST >\u65e5\u5fd7:  \u65e5\u5fd7\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u65e5\u5fd7\u6536\u96c6\u8fdb\u7a0b\n< 2018-05-31 13:43:30.601 CST >\u63d0\u793a:  \u540e\u7eed\u7684\u65e5\u5fd7\u8f93\u51fa\u5c06\u51fa\u73b0\u5728\u76ee\u5f55 "pg_log"\u4e2d.\n\n')),(0,a.kt)("p",null,"\u91cd\u542f\u5b8c\u6210\u540e,\u4f7f\u7528postgres\u767b\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'[root@ZABBIX-SERVER 9.5]# psql --username=postgres\n\u7528\u6237 postgres \u7684\u53e3\u4ee4\uff1a\npsql (9.5.13)\n\u8f93\u5165 "help" \u6765\u83b7\u53d6\u5e2e\u52a9\u4fe1\u606f.\npostgres=# ^C\n')),(0,a.kt)("p",null,"\u5728\u8be5\u4f1a\u8bdd\u4e2d\u6267\u884c\u4fee\u6539\u5bc6\u7801\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ALTER USER postgres WITH PASSWORD '\u65b0\u5bc6\u7801'; \n")),(0,a.kt)("p",null,"\u64cd\u4f5c\u5b8c\u6210\u7684\uff0c\u6267\u884c\uff1a\\q\u547d\u4ee4\u56de\u8f66\u9000\u51fa\u3002\xa0  "),(0,a.kt)("p",null,"\u6700\u540e,\u6062\u590dpg_hba.conf\u8bbe\u7f6e\u4e3amd5\u5e76\u91cd\u542f\u670d\u52a1"),(0,a.kt)("h2",{id:"\u91cd\u542f\u6570\u636e\u5e93"},"\u91cd\u542f\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"./usr/pgsql-9.5/bin/pg_ctl restart -D /var/lib/pgsql/9.5/data\n")),(0,a.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u521b\u5efa\u7528\u6237\u6570\u636e\u5e93\uff0c\u5982testdb\uff1a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=# CREATE DATABASE testdb OWNER dbuser;\n")),(0,a.kt)("p",null,"\u5c06testdb\u6570\u636e\u5e93\u7684\u6240\u6709\u6743\u9650\u90fd\u8d4b\u4e88dbuser\uff1a "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=# GRANT ALL PRIVILEGES ON DATABASE testdb TO dbuser;\n")),(0,a.kt)("h2",{id:"\u5220\u9664\u6570\u636e\u5e93"},"\u5220\u9664\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u4f8b\u5982\u5220\u9664testdb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=# DROP DATABASE testdb;\n")),(0,a.kt)("h2",{id:"\u5907\u4efd\u6570\u636e"},"\u5907\u4efd\u6570\u636e"),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pg_dump -h 127.0.0.1 -U postgres databasename > db_backup_date.sql\n")),(0,a.kt)("p",null,"-h:\u76ee\u6807\u4e3b\u673a"),(0,a.kt)("p",null,"-U\uff1a\u7528\u6237\u540d\u79f0"),(0,a.kt)("h2",{id:"\u5bfc\u5165\u6570\u636e\u5e93"},"\u5bfc\u5165\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"psql -U postgres -d databasename -f back_db_conf0529.sql \n")),(0,a.kt)("p",null,"-U\uff1a\u7528\u6237\u540d\u79f0"),(0,a.kt)("p",null,"-d\uff1a\u6570\u636e\u5e93\u540d\u79f0"),(0,a.kt)("p",null,"-f\uff1a\u5bfc\u5165\u6570\u636e\u5e93\u6587\u4ef6"),(0,a.kt)("h2",{id:"\u76f8\u5173\u64cd\u4f5c"},"\u76f8\u5173\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u67e5\u770b\u6570\u636e\u5e93"},"\u67e5\u770b\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=# \\l               //\\\u52a0\u4e0a\u5b57\u6bcdl,\u76f8\u5f53\u4e8emysql\u7684\uff0cmysql> show databases;\n                                         \u8d44\u6599\u5e93\u5217\u8868\n       \u540d\u79f0        |  \u62e5\u6709\u8005  | \u5b57\u5143\u7f16\u7801 |  \u6821\u5bf9\u89c4\u5219   |    Ctype    |       \u5b58\u53d6\u6743\u9650        \n-------------------+----------+----------+-------------+-------------+-----------------------\n ots_am_bdp_conf   | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | \n ots_app_conf      | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | \n ots_business_test | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | \n postgres          | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | \n template0         | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres          +\n                   |          |          |             |             | postgres=CTc/postgres\n template1         | postgres | UTF8     | zh_CN.UTF-8 | zh_CN.UTF-8 | =c/postgres          +\n                   |          |          |             |             | postgres=CTc/postgres\n(6 \u884c\u8bb0\u5f55)\n\npostgres=# \npostgres=# select pg_database_size('ots_business_test');   //\u67e5\u770bots_business_test\u6570\u636e\u5e93\u7684\u5927\u5c0f  \n pg_database_size \n------------------\n        399552276\n(1 \u884c\u8bb0\u5f55)\n\npostgres=# select pg_database.datname, pg_database_size(pg_database.datname) AS size from pg_database;  //\u67e5\u770b\u6240\u6709\u6570\u636e\u5e93\u7684\u5927\u5c0f  \n      datname      |   size    \n-------------------+-----------\n template1         |   6865412\n template0         |   6857220\n postgres          |   7089940\n ots_business_test | 399552276\n ots_am_bdp_conf   |  12939028\n ots_app_conf      |   8359700\n(6 \u884c\u8bb0\u5f55)\n\npostgres=# select pg_size_pretty(pg_database_size('ots_app_conf'));   //\u4ee5KB\uff0cMB\uff0cGB\u7684\u65b9\u5f0f\u6765\u67e5\u770b\u6570\u636e\u5e93\u5927\u5c0f  \n pg_size_pretty \n----------------\n 8164 kB\n(1 \u884c\u8bb0\u5f55)\n\n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u591a\u8868"},"\u67e5\u770b\u591a\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mssql"},'postgres=# select * from pg_tables;  //\u67e5\u8be2\u6240\u6709\u7684\u8868,\u76f8\u5f53\u4e8emysql\u7684show tables;\n     schemaname     |        tablename        | tableowner | tablespace | hasindexes | hasrules | hastriggers \n--------------------+-------------------------+------------+------------+------------+----------+-------------\n pg_catalog         | pg_statistic            | postgres   |            | t          | f        | f\n pg_catalog         | pg_cast                 | postgres   |            | t          | f        | f\n pg_catalog         | pg_authid               | postgres   | pg_global  | t          | f        | f\n //more...\n\npostgres=# \\d pg_cast;   //\u76f8\u5f53\u4e8emysql\u7684\uff0cmysql> desc pg_cast;  \n  \u8d44\u6599\u8868 "pg_catalog.pg_cast"\n    \u680f\u4f4d     |  \u578b\u522b  | \u4fee\u9970\u8bcd \n-------------+--------+--------\n castsource  | oid    | \u975e\u7a7a\n casttarget  | oid    | \u975e\u7a7a\n castfunc    | oid    | \u975e\u7a7a\n castcontext | "char" | \u975e\u7a7a\n castmethod  | "char" | \u975e\u7a7a\n\u7d22\u5f15\uff1a\n    "pg_cast_oid_index" UNIQUE, btree (oid)\n    "pg_cast_source_target_index" UNIQUE, btree (castsource, casttarget)\n\npostgres=# select pg_relation_size(\'pg_cast\');    //\u67e5\u770b\u8868\u5927\u5c0f  \n pg_relation_size \n------------------\n            16384\n(1 \u884c\u8bb0\u5f55)\npostgres=# select pg_size_pretty(pg_relation_size(\'pg_cast\'));   //\u4ee5KB\uff0cMB\uff0cGB\u7684\u65b9\u5f0f\u6765\u67e5\u770b\u8868\u5927\u5c0f  \n pg_size_pretty \n----------------\n 16 kB\n(1 \u884c\u8bb0\u5f55)\n\npostgres=# select pg_size_pretty(pg_total_relation_size(\'pg_cast\'));  //\u67e5\u770b\u8868\u7684\u603b\u5927\u5c0f\uff0c\u5305\u62ec\u7d22\u5f15\u5927\u5c0f \n pg_size_pretty \n----------------\n 80 kB\n(1 \u884c\u8bb0\u5f55)\n\n\n\n')),(0,a.kt)("h3",{id:"\u67e5\u770b\u7d22\u5f15"},"\u67e5\u770b\u7d22\u5f15"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=> \\di                      //\u76f8\u5f53\u4e8emysql\u7684\uff0cmysql> show index from test;  \n                List of relations  \n Schema |     Name      | Type  |  Owner  | Table  \n--------+---------------+-------+---------+-------  \n public | playboy_id_pk | index | playboy | test  \n(1 row)  \n  \npostgres=> select pg_size_pretty(pg_relation_size('playboy_id_pk'));    //\u67e5\u770b\u7d22\u5927\u5c0f  \n pg_size_pretty  \n----------------  \n 8192 bytes  \n(1 row)  \n")),(0,a.kt)("h3",{id:"\u67e5\u770b\u8868\u7a7a\u95f4\u4ee5\u53ca\u5927\u5c0f"},"\u67e5\u770b\u8868\u7a7a\u95f4\uff0c\u4ee5\u53ca\u5927\u5c0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"postgres=> select spcname from pg_tablespace;         //\u67e5\u770b\u6240\u6709\u8868\u7a7a\u95f4  \n  spcname  \n------------  \n pg_default  \n pg_global  \n(2 rows)  \n  \npostgres=> select pg_size_pretty(pg_tablespace_size('pg_default'));   //\u67e5\u770b\u8868\u7a7a\u95f4\u5927\u5c0f  \n pg_size_pretty  \n----------------  \n 14 MB  \n(1 row)  \n")))}i.isMDXComponent=!0},69811:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/install-1257e3e9bc8b58c22f2ebfb33ec66d87.png"}}]);