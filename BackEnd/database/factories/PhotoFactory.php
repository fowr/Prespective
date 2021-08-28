<?php

namespace Database\Factories;

use App\Models\Photo;
use Illuminate\Database\Eloquent\Factories\Factory;

class PhotoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Photo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description'=>$this->faker->name,
            'url'=>'https://unsplash.it/650/450',
            'userId'=>$this->faker->randomDigit+1,
            'like'=>$this->faker->randomDigit,
            'veiw'=>$this->faker->randomDigit
        ];
    }
}
