<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\IndividualPackage;
use App\Itinerary;
use App\PackageType;
use Illuminate\Http\Request;

class ItineraryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        return $this->middleware('auth:admin');
    }

    public function index()
    {
        // $itinerarys = Itinerary::all();
        $itinerarys = Itinerary::paginate(10);
        return view('admin.itinerary')->with(['itinerarys' => $itinerarys]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $packages = PackageType::all();
        $individualPkgs = IndividualPackage::all();
        return view('admin.addItinerary')->with(['packages' => $packages, 'individualPkgs' => $individualPkgs]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'itineraryTitle' => 'required',
            'itineraryDesc' => 'required',
            'packageType' => 'required',
            'individualPackage' => 'required',

        ]);
        // return $request;
        $itinerarys = new Itinerary();
        $itinerarys->title = $request->input('itineraryTitle');
        $itinerarys->itinerary = $request->input('itineraryDesc');
        $itinerarys->p_id = $request->input('packageType');
        $itinerarys->ip_id = $request->input('individualPackage');

        $itinerarys->save();
        return redirect()->route('adminn.itinerary.index')->with("status", "Itinerary added successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $itinerary = Itinerary::find($id);
        // return $itinerary;
        $packages = PackageType::all();
        $individualPkgs = IndividualPackage::all();
        return view('admin.editItinerary')->with(['packages' => $packages, 'individualPkgs' => $individualPkgs, 'itinerary' => $itinerary]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'itineraryTitle' => 'required',
            'itineraryDesc' => 'required',
            'packageType' => 'required',
            'individualPackage' => 'required',

        ]);
        $itinerarys = Itinerary::find($id);

        $itinerarys->title = $request->input('itineraryTitle');
        $itinerarys->itinerary = $request->input('itineraryDesc');
        $itinerarys->p_id = $request->input('packageType');
        $itinerarys->ip_id = $request->input('individualPackage');

        $itinerarys->save();
        return redirect()->route('adminn.itinerary.index')->with("status", "Itinerary Information updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $itinerarys = Itinerary::find($id);
        $itinerarys->delete();
        return redirect()->route('adminn.itinerary.index')->with("status", "Itinerary Information deleted successfully");
    }
}