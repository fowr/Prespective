<?php

namespace Database\Factories;

use App\Models\UserLike;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserLikeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = UserLike::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'User_id'=>$this->faker->randomDigit +1,
            'Photo_id'=>$this->faker->randomDigit +1,
        ];
    }
}
