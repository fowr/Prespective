<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {$photos = DB::table('photos')
        ->join('users', 'photos.userId', '=', 'users.id')
        ->select('photos.*', 'users.name', 'users.avatar')
        ->get();
        return $photos;
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
            'name' => 'required',
            'slug' => 'required',
            'price' => 'required'
        ]);

        return Photo::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = DB::table('photos')
                     ->join('users', 'photos.userId', '=', 'users.id')
                    ->where('photos.id', '=' , $id)
                    ->select('users.*', 'photos.*')
                    ->get();
        return $users;
    }
    public function profile($id)
    {
        $users = DB::table('photos')
                     ->join('users', 'users.id', '=', 'photos.userId')
                    ->where('users.id', '=' , $id)
                    ->select('users.*', 'photos.*')
                    ->get();
        return $users;
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
        $Photo = Photo::find($id);
        $Photo->update($request->all());
        return $Photo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Photo::destroy($id);
    }

     /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Photo::where('name', 'like', '%'.$name.'%')->get();
    }
}
