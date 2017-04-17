/**
    * Created by sw on 2017/4/14 0014.
    */

    $(function () {
    var data1="<thead><tr><th>名称</th><th>编号</th><th>所属科室</th><th>状态</th><th>操作</th></tr></thead>";

    var machine_tableid="";
    for (var i=1;i<21;i++){
        machine_tableid+="<tr><td>内镜"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>外科室"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn' href='#' onclick='messages_view()'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_machine.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#machine_tableid").html(
        data1+"<tbody>"+machine_tableid+"</tbody>"
    );

    var section_tableid="";
    var section="<thead><tr><th>名称</th><th>编号</th><th>科室长</th><th>联系电话</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        section_tableid+="<tr><td>科室"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>科长"+i+"</td><td class='center'>12345678912</td><td class='center'><span class='label label-success'>开启</span></td><td class='center'><a class='btn' href='#' onclick='messages_view()'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_section.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#section_tableid").html(
        section+"<tbody>"+section_tableid+"</tbody>"
    );

    var user_tableid="";
    var user="<thead><tr><th>名称</th><th>编号</th><th>联系电话</th><th>所属科室</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        user_tableid+="<tr><td>员工"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>12345678912</td><td class='center'>外科室"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn' href='#' onclick='messages_view()'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_user.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#user_tableid").html(
        user+"<tbody>"+user_tableid+"</tbody>"
    );

    var good_tableid="";
    var good="<thead><tr><th>名称</th><th>编号</th><th>厂家</th><th>技术支持</th><th>使用年限</th><th>联系电话</th><th>所属科室</th><th>状态</th><th>操作</th></tr></thead>";
    for (var i=1;i<21;i++){
        good_tableid+="<tr><td>设备"+i+"</td><td class='center'>NO000"+i+"</td><td class='center'>厂家"+i+"</td><td class='center'>技术"+i+"</td><td class='center'>5</td><td class='center'>12345678912</td><td class='center'>外科室"+i+"</td><td class='center'><span class='label label-success'>可用</span></td><td class='center'><a class='btn' href='#' onclick='messages_view()'><i class='icon-zoom-in'></i>查看</a><a class='btn' href='edit_good.html'><i class='icon-edit'></i>编辑</a></td></tr>"
    }
    $("#good_tableid").html(
        good+"<tbody>"+good_tableid+"</tbody>"
    );
});