/**
    * Created by sw on 2017/4/14 0014.
    */

    $(function () {
    var data1="<thead><tr><th>名称</th><th>编号</th><th>识别卡号</th><th>厂家</th><th>技术支持</th><th>使用年限</th><th>联系电话</th><th>所属科室</th><th>状态</th><th>操作</th></tr></thead>";

    var machine_tableid="";
    for (var i=1;i<21;i++){
        machine_tableid+="<tr><td>内镜"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>COI00"+i+"</td><td class='center'>厂家"+i+"</td><td class='center'>技术"+i+"</td><td class='center'>3</td><td class='center'>12345678912</td><td class='center'>外科室"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn btn-setting'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_machine.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#machine_tableid").html(
        data1+"<tbody>"+machine_tableid+"</tbody>"
    );

    var sectionlist=["急诊科","心内科","肺病科","脾胃病科","肝病科","肾病科","内分泌科","脑病科","风湿免疫科","肿瘤科","血液科","老年病科","普外科","骨科","重症监护室","周围血管科","皮肤科","妇科","儿科","眼科","耳鼻喉科","口腔科","放射科","检验科"];

    var section_tableid="";
    var section="<thead><tr><th>名称</th><th>编号</th><th>科室长</th><th>联系电话</th><th>科地址</th><th>人数</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        section_tableid+="<tr><td>"+sectionlist[i]+"</td><td class='center'>NO000"+i+"</td><td class='center'>科长"+i+"</td><td class='center'>12345678912</td><td class='center'>二楼203</td><td class='center'>16</td><td class='center'><span class='label label-success'>开启</span></td><td class='center'><a class='btn btn-setting'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_section.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#section_tableid").html(
        section+"<tbody>"+section_tableid+"</tbody>"
    );

    var user_tableid="";
    var user="<thead><tr><th>名称</th><th>编号</th><th>身份识别卡</th><th>联系电话</th><th>所属科室</th><th>职务</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        user_tableid+="<tr><td>员工"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>12345678912</td><td class='center'>36,215,202,175</td><td class='center'>外科室"+i+"</td><td class='center'>职务"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn btn-setting'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_user.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#user_tableid").html(
        user+"<tbody>"+user_tableid+"</tbody>"
    );

    var good_tableid="";
    var good="<thead><tr><th>名称</th><th>编号</th><th>识别卡号</th><th>厂家</th><th>技术支持</th><th>使用年限</th><th>联系电话</th><th>所属科室</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        good_tableid+="<tr><td>设备"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>CID000"+i+"</td><td class='center'>厂家"+i+"</td><td class='center'>技术"+i+"</td><td class='center'>5</td><td class='center'>12345678912</td><td class='center'>外科室"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn btn-setting'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_goods.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#good_tableid").html(
        good+"<tbody>"+good_tableid+"</tbody>"
    );
});