import Component from "../Core/Component";
import ArticleModel from "../../models/Article.model";

export default class Article extends Component<ArticleModel> {
  constructor(
    private title: string,
    private slug: string,
    private category: string,
    private createdAt: Date,
    private views: number,
    private coverImage: string,
    private summary: string,
    private body: string,
    private tags: string,
    private numberOfComments: number,
    private numberOfLikes: number
  ) {
    super();

    this.template = `
      <div id="${this.componentId}">
        <h3>{{title}}</h3>
        <p>{{createdAt}} • {{views}} person read this article</p>
        <img src="{{coverImage}}">
        <p><em>{{summary}}</em></p>
        <p>{{body}}</p>
        <p>{{numberOfLikes}} likes</p>
        <form>
          <button type="submit">Give a like</button>
        </form>
        <p>{{numberOfComments}} comments</p>
        <form>
          <button type="submit">Leave a comment</button>
        </form>
      </div>
    `;

    this._state = {
      title: this.title,
      slug: this.slug,
      category: this.category,
      createdAt: this.createdAt,
      views: this.views,
      coverImage: this.coverImage,
      summary: this.summary,
      body: this.body,
      tags: this.tags,
      numberOfLikes: this.numberOfLikes,
      numberOfComments: this.numberOfComments,
    };

    this.fill();
  }
}
