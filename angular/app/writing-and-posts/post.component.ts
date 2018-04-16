import { HttpClient } from "@angular/common/http";
import { Component, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { IPostData, pathKeyedPosts } from "./post.data";

@Component({
  templateUrl: "post.html",
  styleUrls: [
    "./../base.scss",
    "./../article.scss",
    "./../code.scss",
    "./post.scss",
  ],
  encapsulation: ViewEncapsulation.None, // because of the injected post html
})
export class PostComponent {
  public title: string;
  public content: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const post: IPostData = pathKeyedPosts.get(params.get("path"));
      // dear reader, feel free to audit the security of this next line
      this.content = sanitizer.bypassSecurityTrustHtml(post.content);
      this.title = post.title;
      window.scrollTo(0, 0);
    });
  }

}
