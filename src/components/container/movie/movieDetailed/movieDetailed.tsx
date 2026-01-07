import type { FC } from 'react';

import Poster from '@/components/fragments/poster/poster';

const MovieDetailed: FC = () => {
  return (
    <>
      <h1 className='font-bold text-3xl text-white mb-5'>Название фильма</h1>
      <div className='flex justify-between mb-20'>
        <Poster />
        <div className='bg-neutral-300 w-4/5 rounded-xl p-5'>
          <div className='flex mb-5'>
            <h2 className='font-bold text-2xl w-1/5'>Сюжет</h2>
            <p className='text-1xl text-justify w-4/5'>
              Вот вам яркий пример современных тенденций — сплочённость команды
              профессионалов способствует подготовке и реализации приоретизации
              разума над эмоциями. Современные технологии достигли такого
              уровня, что высокое качество позиционных исследований в
              значительной степени обусловливает важность системы массового
              участия. Кстати, сделанные на базе интернет-аналитики выводы,
              которые представляют собой яркий пример
              континентально-европейского типа политической культуры, будут
              разоблачены. Как уже неоднократно упомянуто, явные признаки победы
              институционализации неоднозначны и будут в равной степени
              предоставлены сами себе. В целом, конечно, начало повседневной
              работы по формированию позиции требует определения и уточнения
              системы массового участия. Задача организации, в особенности же
              выбранный нами инновационный путь предоставляет широкие
              возможности для дальнейших направлений развития! И нет сомнений,
              что акционеры крупнейших компаний, превозмогая сложившуюся
              непростую экономическую ситуацию, указаны как претенденты на роль
              ключевых факторов. Есть над чем задуматься: ключевые особенности
              структуры проекта обнародованы.
            </p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2 mb-5' />
          <div className='flex mb-5'>
            <h2 className='font-bold text-2xl w-1/5'>Режиссер</h2>
            <p className='font-bold text-1xl text-blue-500 w-4/5'>
              Фамилия Имя Отчество
            </p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2 mb-5' />
          <div className='flex mb-5'>
            <h2 className='font-bold text-2xl w-1/5'>Продюсер</h2>
            <p className='font-bold text-1xl text-blue-500 w-4/5'>
              Фамилия Имя Отчество, Фамилия Имя Отчество
            </p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2 mb-5' />
          <div className='flex mb-5'>
            <h2 className='font-bold text-2xl w-1/5'>Страна</h2>
            <p className='font-bold text-1xl w-4/5'>США</p>
          </div>
          <hr className='w-9/10 mx-auto border-t-2 mb-5' />
          <div className='flex mb-5'>
            <h2 className='font-bold text-2xl w-1/5'>
              Ограничение по возрасту
            </h2>
            <p className='font-bold text-1xl w-4/5'>18+</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailed;
