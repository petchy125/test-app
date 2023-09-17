'use client';

import Image from 'next/image';
import { useState } from 'react';

import Card from '@/app/container/card';
import { Show } from '../../types';
import { getSafeImageUrl } from '@/lib/util';
import ShowModal from './show-modal';

interface Collection {
  title: string;
  shows: Show[];
}

interface CollectionsProps {
  collections: Collection[];
  searchedResults: Show[];
}

export default function Collections({
  collections,
  searchedResults,
}: CollectionsProps) {
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedShow, setSelectedShow] = useState<Show>({} as Show);

  const renderShowItem = (show: Show) => {
    const src = getSafeImageUrl(show.backdrop_path);
    const altText = show.title || show.name || 'show-image';

    return (
      <Card.Item
        onClick={() => {
          setToggleModal(true);
          setSelectedShow(show);
        }}
        className="max-w-[305px] w-full"
        data-testid="item"
        key={show.id}
      >
        <Image
          width={305}
          height={200}
          src={src}
          className="w-full cursor-pointer height-auto p-0 m-0 border-0"
          alt={altText}
        />
        <Card.Meta>
          <Card.SubTitle>{altText}</Card.SubTitle>
          <Card.Text>{show.overview}</Card.Text>
        </Card.Meta>
      </Card.Item>
    );
  };

  if (searchedResults.length > 0) {
    return (
      <Card.Group>
        <Card>
          <Card.Entities className="flex-wrap justify-center gap-y-12">
            {searchedResults.map((show) => renderShowItem(show))}
          </Card.Entities>
        </Card>
      </Card.Group>
    );
  }

  return (
    <Card.Group className="pt-24">
      {collections.map((collection) => (
        <Card key={collection.title}>
          <Card.Title>{collection.title}</Card.Title>
          <Card.Entities>
            {collection.shows.slice(0, 5).map((show) => renderShowItem(show))}
          </Card.Entities>
        </Card>
      ))}
      <ShowModal
        key={selectedShow.id}
        show={selectedShow}
        toggle={toggleModal}
        toggleHandler={setToggleModal}
      />
    </Card.Group>
  );
}
