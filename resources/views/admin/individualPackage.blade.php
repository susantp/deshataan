<?php use App\Http\Controllers\Admin\IndividualPackageController; ?>
@extends('admin.templates.layout')
@section('content')

<!--**********************************
            Content body start
        ***********************************-->
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles">
            <div class="col p-md-0">
                <h4>Add Individual Package Type</h4>
            </div>
            <div class="col p-md-0">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a>
                    </li>
                    <li class="breadcrumb-item active">
                        <a href="{{url('adminn/indipackage/create')}}">Add Individual Package Type</a>
                    </li>
                </ol>
            </div>
        </div>
    </div>


</div>
<!--**********************************
                Content body end
            ***********************************-->

<div class="content-body" style="margin-top: -1052px;">

    <div class="container-fluid">

        <div class="row">

            @if(session()->has('status'))
            <div class="alert alert-success">
                {!! session()->get('status') !!}
            </div>
            @endif
            <!-- /# column -->

            <!-- /# column -->
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h4 class="mb-4">Manage Individual Package</h4>
                        </div>

                        <div class="card-upload" style="float:right">
                            <a href="{{url('adminn/indipackage/create')}}" class="mr-4" data-toggle="tooltip"
                                data-placement="top" title="Add Package"><i class="fas fa-upload"></i></a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-bordered" style="min-width: 500px;">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>title</th>
                                        <th>location</th>
                                        <th>duration</th>
                                        <th>ticket quantity</th>
                                        <th>Package Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                @foreach ($individualPkgs as $key=>$individualPkg)


                                <tbody>
                                    <tr>
                                        <th>{{ $loop->index + 1 }}</th>
                                        <td>{{$individualPkg->title}}</td>
                                        <td>{{$individualPkg->location}} </td>
                                        <td>{{$individualPkg->duration}}</td>
                                        <td>{{$individualPkg->ticket_quantity}} </td>
                                        <td>
                                            @foreach(IndividualPackageController::getPkgTypeObject($individualPkg->package_type) as $pkgType)
                                            {!! $pkgType['p_name'].'<br>' !!}
                                            @endforeach
                                         </td>
                                        {{-- <td>{{App\Http\Controllers\PagesController::showPackageType($individualPkg->package_type)}} --}}
                                        {{-- </td> --}}
                                        <td><span><a href="{{url("adminn/indipackage/$individualPkg->p_id/edit")}}"
                                                    class="mr-4" data-toggle="tooltip" data-placement="top"
                                                    title="Edit"><i class="fas fa-edit"></i></a>

                                                <a href="javascript:void();" class="mr-4" data-toggle="tooltip"
                                                    data-placement="top" title="Delete"
                                                    onclick="event.preventDefault();document.querySelector('#item-delete{{$individualPkg->p_id}}').submit();">
                                                    <i class="fa fa-trash color-danger" aria-hidden="true"
                                                        id="deleteIndividualPackage">
                                                    </i>
                                                </a>

                                                <form method='POST' id="item-delete{{$individualPkg->p_id}}"
                                                    action='{{url("adminn/indipackage/$individualPkg->p_id")}}'>
                                                    @csrf
                                                    <input type="hidden" name="_method" value="DELETE">
                                                </form>

                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                                @endforeach
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /# column -->

            {{-- {{ $packages->links() }} --}}

        </div>
        <!-- row -->

    </div>


    @endsection
