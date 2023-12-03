import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import Link from "next/link";
import Image from "next/image";
import { AddComment, Comment } from "@/components";

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ slug }) => {
  console.log(slug);
  return (
    <Layout>
      <div className="text-sm my-2 breadcrumbs">
        <ul>
          <li>
            <Link className={`underline-offset-4`} href={`/`}>
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link className={`underline-offset-4`} href={`/blog`}>
              Maqola
            </Link>
          </li>
          <li className={`underline underline-offset-4`}>{slug}</li>
        </ul>
      </div>
      <div>
        <Image
          src={`/images/apple.png`}
          alt={"apple"}
          width={999}
          height={999}
          className={`w-full h-[600px] object-contain bg-black rounded-lg`}
        />
        <h1 className={`my-5 text-4xl text-center font-semibold`}>{slug}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisi
          nulla, faucibus posuere dui sed, aliquam egestas dui. Vivamus ut
          venenatis ante, sed dignissim ex. Phasellus rutrum gravida nulla vitae
          efficitur. Aliquam tempus, risus laoreet rutrum sollicitudin, diam
          ligula gravida metus, at pulvinar ex arcu sit amet orci. Duis
          tincidunt lectus ac auctor faucibus. Cras at mauris nec leo tempor
          volutpat. Fusce porta non sem ac lacinia. Cras ullamcorper tellus ut
          blandit placerat. Phasellus maximus viverra libero, non volutpat massa
          malesuada et. Aenean commodo libero varius volutpat varius. Aliquam
          pretium, dolor eget porta ultricies, justo nulla vehicula dolor, at
          vulputate metus tortor a erat. Praesent id erat sem. Phasellus
          fermentum mi neque, quis consequat erat auctor sed. Nunc scelerisque
          venenatis mattis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nulla rutrum laoreet velit eu varius. Duis vehicula dui
          nunc, ut gravida lectus placerat sed. Sed venenatis arcu in arcu
          fermentum, non sagittis dui interdum. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Donec
          facilisis, leo id elementum sagittis, elit diam luctus tortor, et
          gravida massa augue id nisl. Sed scelerisque ante nibh, eu ullamcorper
          sem consectetur vitae. Quisque mollis suscipit dapibus. Duis finibus
          venenatis velit, quis interdum velit elementum nec. Maecenas eget
          rhoncus nibh. Duis fringilla ex nec finibus consectetur. Mauris in
          elementum tortor. Cras ullamcorper egestas nisl, ut tristique augue
          scelerisque ut. Aenean ornare eros a pharetra vehicula. Integer
          dignissim tortor in egestas suscipit. Integer fringilla semper est et
          convallis. Etiam non viverra metus. Suspendisse malesuada ipsum vel
          ante eleifend euismod. Aliquam fermentum pellentesque tempor. Maecenas
          faucibus turpis ac tellus eleifend ornare. Donec dignissim congue urna
          eget accumsan. Proin congue enim ac libero dapibus, eu porttitor urna
          lobortis. Mauris vel lacus gravida, aliquet sem pharetra, sodales
          nisi. Praesent tempor feugiat congue. Nullam nec tortor sed felis
          aliquet mollis. Sed placerat eros magna, vitae vulputate erat
          hendrerit nec. Etiam hendrerit enim quis nibh rutrum porta id id sem.
          Morbi tristique ligula porta tortor posuere rutrum. Proin commodo
          sapien ac neque venenatis imperdiet nec sed enim. Integer suscipit
          finibus massa sed lacinia. Vestibulum porttitor, ipsum et euismod
          cursus, odio ipsum commodo mauris, nec dictum neque tortor id libero.
          Nam nec commodo purus. Donec ultricies arcu sed nunc pharetra varius
          et scelerisque eros. Nunc in nunc eleifend, maximus eros in, dictum
          ex. Duis facilisis vitae dolor eget luctus. Pellentesque venenatis
          purus mauris, id sollicitudin urna hendrerit vitae. Sed vitae magna
          non mauris tristique venenatis non sed elit. Fusce dignissim, magna
          vel volutpat tincidunt, massa enim interdum nulla, sed finibus turpis
          libero eu mi. Duis semper purus sit amet dignissim mattis. Nullam
          vulputate ligula eu ultricies ullamcorper. Sed orci odio, fermentum et
          erat ut, fermentum varius dolor. Vivamus at ante eget nunc imperdiet
          efficitur sed sit amet lorem. Donec dui arcu, semper vitae facilisis
          at, vulputate in odio. Ut vel odio dictum nisi ultricies luctus.
          Maecenas ac erat vestibulum mauris porttitor eleifend vitae nec lorem.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Phasellus volutpat augue sit amet velit
          sagittis consectetur. Cras consequat sem non libero feugiat lobortis.
          Quisque id imperdiet quam. Sed sit amet lacinia neque. Nunc porttitor
          id ligula eget luctus. Aenean lacinia, enim id porta venenatis, erat
          est sodales odio, ut sagittis nisi mauris quis nibh. Nulla ut ipsum at
          leo pulvinar venenatis. Sed tempor aliquam sem, vel gravida turpis
          euismod nec. Aenean sed consequat nisl, iaculis mattis felis.
          Pellentesque facilisis magna et lacus finibus, sit amet condimentum
          neque accumsan. Mauris consequat, mi tristique varius pellentesque, ex
          arcu tristique tellus, tincidunt dictum nunc libero iaculis eros.
          Aliquam erat volutpat. Nulla accumsan nulla mi, et malesuada tellus
          gravida nec. Sed faucibus varius pharetra. Praesent quis aliquam
          turpis, ac consequat tellus. Praesent consectetur laoreet magna, vitae
          aliquet lorem rhoncus a. Quisque maximus viverra ultrices. Vestibulum
          consequat vel purus quis suscipit. Sed sed maximus dui, quis gravida
          diam. Phasellus id ipsum a lacus tristique sagittis ac et lectus.
          Fusce interdum ullamcorper turpis et pharetra. Mauris pretium nulla
          non odio tincidunt bibendum. Phasellus condimentum tincidunt diam id
          imperdiet. Sed iaculis ac arcu non placerat. Sed a nibh placerat,
          lacinia felis quis, rutrum mauris. Vestibulum lacinia lectus vel nibh
          pellentesque, eu ultrices massa ullamcorper. Donec eu elit turpis.
          Donec gravida metus id justo gravida cursus. Morbi libero eros,
          aliquam id odio quis, ultricies maximus eros. Phasellus ut dui id
          massa cursus consectetur. Mauris eu porttitor dolor, in imperdiet est.
          Quisque ut odio quis lorem lacinia pulvinar eget sed justo. Phasellus
          ullamcorper, ex et bibendum tempus, felis dui imperdiet massa, vitae
          fringilla mi dolor vitae orci. Aliquam nibh massa, ornare sed
          tincidunt id, vehicula sit amet nulla. Ut eget nibh ac mi blandit
          tincidunt in eget sapien. Mauris vel scelerisque turpis. Proin sed
          elit mollis, sagittis nisl ac, molestie lacus. Nulla sapien libero,
          dictum quis urna vel, ultrices sagittis arcu. Duis condimentum metus
          urna, ac pulvinar elit molestie tincidunt. Nulla eget dolor ornare,
          placerat enim et, efficitur neque. Pellentesque a lobortis sem.
          Phasellus posuere libero a urna sagittis venenatis ac eget ex. Duis
          fringilla arcu justo, ut venenatis ipsum aliquam ac. Duis venenatis
          consectetur nunc, non pharetra est pulvinar sit amet. Proin sodales
          ante non odio vulputate, vitae ullamcorper tortor tristique. Donec sed
          dignissim nunc, eget elementum mauris. Proin vitae pellentesque leo.
          Sed semper eleifend massa sed tempus. Duis ultrices tempus tortor. Nam
          sodales arcu in tortor facilisis, vitae lobortis orci scelerisque.
          Praesent turpis purus, rhoncus ac nisi sed, maximus molestie metus.
          Quisque dictum ligula at nisl vestibulum, vitae hendrerit justo
          placerat. Etiam justo purus, luctus at lacinia placerat, finibus quis
          est. Mauris vestibulum imperdiet nunc, ut consequat purus dictum
          viverra. Nulla pharetra fermentum dignissim. Duis rhoncus blandit
          ipsum sit amet maximus. Pellentesque aliquam tincidunt nisi eu
          pharetra. Aliquam quis ultrices lorem. Suspendisse dignissim eros ut
          mi sagittis pellentesque. Nunc vitae molestie nisl. Integer ultricies
          commodo dolor nec convallis. Ut sodales sapien sed dui rhoncus, ut
          pharetra purus malesuada. In malesuada venenatis risus. Phasellus
          tincidunt risus at magna aliquet, eget pulvinar purus accumsan. Donec
          lacinia nisi ac velit commodo, eu tristique felis ornare. Aenean at
          dolor in elit placerat tincidunt viverra nec lacus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus et enim sed
          neque elementum fermentum. Nulla eget condimentum mauris. Curabitur
          bibendum risus non auctor aliquet. Ut sed nisi eu ipsum viverra
          lacinia. Pellentesque dictum faucibus sapien vitae suscipit. Duis
          semper justo orci, vel ullamcorper odio tincidunt nec. Vivamus
          porttitor eu felis eget pharetra. Aliquam risus mauris, imperdiet ut
          mauris nec, gravida posuere ex. Maecenas lacinia libero a est cursus
          posuere. Cras lacinia vitae arcu sit amet aliquam. Morbi eget massa ut
          elit efficitur condimentum non eget arcu. Pellentesque varius placerat
          erat. Sed hendrerit diam nisi, a hendrerit nibh dictum id. Vestibulum
          ut orci eu est interdum tincidunt sed at odio. In sed ligula blandit
          nunc molestie consectetur. Sed sed pretium lectus. Nullam ac urna
          lacinia, luctus leo faucibus, lobortis urna. Quisque iaculis mauris eu
          maximus ullamcorper. Sed bibendum malesuada dui eget commodo.
          Phasellus massa urna, tempor non urna a, auctor aliquam dui. Nam
          lectus metus, pharetra ac semper eu, aliquet vitae eros. Nunc
          pellentesque ut felis sit amet ornare. Sed sit amet enim purus.
          Vestibulum mollis porttitor lobortis. Proin vulputate tempor nunc eget
          dictum. Mauris ac dolor eget tortor euismod maximus sit amet at sem.
          Proin eu felis eget nisl molestie ultricies quis eget augue. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed quis ipsum feugiat elit ornare sollicitudin.
          Cras pellentesque sem ac est egestas, eu posuere eros fringilla. Cras
          volutpat arcu a nisl euismod ultricies. Cras nunc nibh, dignissim ac
          euismod scelerisque, fringilla nec purus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
      <div>
        <hr className={`mt-6`} />
        <div>
          <Comment />
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetailPage;

// @ts-ignore
export const getServerSideProps: GetServerSideProps<
  BlogDetailPageProps
> = async ({ query }) => {
  const slug = query.slug;
  return {
    props: { slug },
  };
};

export interface BlogDetailPageProps {
  slug: string;
  query: string;
}
