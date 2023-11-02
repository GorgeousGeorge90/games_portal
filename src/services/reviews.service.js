import supabase from '@/client';


class ReviewsService {
    constructor() {}

    async fetchReviews() {
        let { data:comments } = await supabase
            .from('games_com')
            .select('*')

        return comments
    }

    async addReview(review,name) {
        const { data } = await supabase
            .from('games_com')
            .upsert({
                review:review,
                name:name,
            })
            .select()

        return data
    }

    async deleteReview(id) {
        const { error } = await supabase
            .from('games_com')
            .delete()
            .eq('id', id)

        return error
    }

}

export default new ReviewsService()